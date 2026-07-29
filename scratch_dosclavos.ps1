Add-Type -AssemblyName System.Net.Http
Add-Type -AssemblyName System.Drawing
$client = New-Object System.Net.Http.HttpClient
$client.DefaultRequestHeaders.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)")

$url = "https://dosclavos.com/casamiento-darwin-tortugas/"
$html = $client.GetStringAsync($url).Result

$matches = [regex]::Matches($html, 'https://www.dosclavos.com/wp-content/uploads/[^\s"'']+\.jpg')
$found = $matches | Select-Object -ExpandProperty Value -Unique | Where-Object { $_ -notmatch "logo|favicon|cinema|somos-luz-cinema" -or $_ -match "bodas-casamientos" }

Write-Host "Found $($found.Count) images on Dos Clavos:"
$found | Select-Object -First 10 | ForEach-Object { Write-Host $_ }

$targetDir = "C:\Users\tomas\Documents\antigravity\resilient-fermi\scratch_dosclavos"
if (-not (Test-Path $targetDir)) { New-Item -ItemType Directory -Path $targetDir }

$i = 1
foreach ($imgUrl in ($found | Select-Object -First 6)) {
    $outPath = Join-Path $targetDir "real_photo_$i.jpg"
    try {
        $bytes = $client.GetByteArrayAsync($imgUrl).Result
        [System.IO.File]::WriteAllBytes($outPath, $bytes)
        $bmp = [System.Drawing.Bitmap]::FromFile($outPath)
        Write-Host "Downloaded real_photo_$i.jpg : $($bmp.Width) x $($bmp.Height) ($($bytes.Length) bytes)"
        $bmp.Dispose()
    } catch {
        Write-Host "Error downloading ${imgUrl}: $_"
    }
    $i++
}

Add-Type -AssemblyName System.Net.Http
$client = New-Object System.Net.Http.HttpClient
$client.DefaultRequestHeaders.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)")

$urls = @(
    "https://rodriguezmansilla.com/casamientos/darwin-tortugas-pilar/"
)

foreach ($u in $urls) {
    try {
        $html = $client.GetStringAsync($u).Result
        $matches = [regex]::Matches($html, 'https://[^\s"'']+\.(?:jpg|jpeg|png|webp)')
        Write-Host "Found $($matches.Count) images on $u :"
        $matches | Select-Object -ExpandProperty Value -Unique | Select-Object -First 10
    } catch {
        Write-Host "Error on ${u}: $_"
    }
}

Add-Type -AssemblyName System.Web
$query = "Darwin Tortugas Pilar salon"
$url = "https://html.duckduckgo.com/html/?q=" + [System.Web.HttpUtility]::UrlEncode($query)
$client = New-Object System.Net.WebClient
$client.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)")
try {
    $html = $client.DownloadString($url)
    $matches = [regex]::Matches($html, 'https?://[^\s"''<>]+\.(?:jpg|jpeg|png)')
    $urls = $matches | Select-Object -ExpandProperty Value -Unique
    Write-Host "Found $($urls.Count) image URLs:"
    $urls | Select-Object -First 15
} catch {
    Write-Host "Error: $_"
}

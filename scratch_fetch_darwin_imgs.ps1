$url = "https://www.darwintortugas.com.ar"
try {
    $req = Invoke-WebRequest -Uri $url -UserAgent "Mozilla/5.0"
    $imgs = $req.Images | Select-Object -ExpandProperty src
    Write-Host "Found $($imgs.Count) images on darwintortugas.com.ar:"
    $imgs | Select-Object -First 10
} catch {
    Write-Host "Error: $_"
}

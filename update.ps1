$packageJson = ((Get-Content .\package.json) | ConvertFrom-Json)

foreach($package in $packageJson.dependencies.psobject.properties.name){
    $packageName = "$package@next"
    Write-Host $packageName
    & npm update $package --save
}

foreach($package in $packageJson.devDependencies.psobject.name){
    
}
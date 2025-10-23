# PowerShell script to manage the Docusaurus container
param(
    [Parameter(Mandatory=$false)]
    [string]$ImageName = "docusaurus:latest",

    [Parameter(Mandatory=$false)]
    [string]$ContainerName = "docusaurus-dev",

    [Parameter(Mandatory=$false)]
    [int]$Port = 80,

    [Parameter(Mandatory=$false)]
    [switch]$Production,

    [Parameter(Mandatory=$false)]
    [switch]$Stop,

    [Parameter(Mandatory=$false)]
    [switch]$Remove
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Docusaurus Container Management" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Stop the container
if ($Stop) {
    Write-Host "🛑 Stopping container: $ContainerName" -ForegroundColor Yellow
    docker stop $ContainerName

    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Container stopped!" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Container was not stopped (it may not exist)" -ForegroundColor Yellow
    }
    exit 0
}

# Remove the container
if ($Remove) {
    Write-Host "🗑️  Removing container: $ContainerName" -ForegroundColor Yellow
    docker rm -f $ContainerName 2>$null

    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Container removed!" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Container was not removed (it may not exist)" -ForegroundColor Yellow
    }
    exit 0
}

# Check if the container is already running
$ExistingContainer = docker ps -a -q -f name=$ContainerName

if ($ExistingContainer) {
    Write-Host "⚠️  Container '$ContainerName' already exists!" -ForegroundColor Yellow
    Write-Host "Removing old container..." -ForegroundColor Yellow
    docker rm -f $ContainerName
}

# Create the 'website' directory if it does not exist (only for dev mode)
if (-not $Production) {
    if (-not (Test-Path ".\website")) {
        Write-Host "📁 Creating 'website' directory..." -ForegroundColor Cyan
        New-Item -ItemType Directory -Path ".\website" | Out-Null
    }
}

# Start the container
if ($Production) {
    Write-Host "🏭 Starting container in PRODUCTION mode" -ForegroundColor Yellow
    Write-Host "📦 Image: $ImageName" -ForegroundColor Green
    Write-Host "🐳 Container: $ContainerName" -ForegroundColor Green
    Write-Host "🌐 Port: 80" -ForegroundColor Green
    Write-Host ""

    docker run -d `
        -p 80:80 `
        --name $ContainerName `
        --restart unless-stopped `
        $ImageName

    $Url = "http://localhost"
} else {
    Write-Host "🔧 Starting container in DEVELOPMENT mode" -ForegroundColor Yellow
    Write-Host "📦 Image: $ImageName" -ForegroundColor Green
    Write-Host "🐳 Container: $ContainerName" -ForegroundColor Green
    Write-Host "🌐 Port: $Port" -ForegroundColor Green
    Write-Host ""

    $SitePath = Join-Path $PWD "website"

    docker run -d `
        -p ${Port}:80 `
        -v "${SitePath}:/app" `
        --name $ContainerName `
        --restart unless-stopped `
        $ImageName

    $Url = "http://localhost:$Port"
}

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Container started successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host "Information:" -ForegroundColor Cyan
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host "🌐 URL: $Url" -ForegroundColor White
    Write-Host ""
    Write-Host "Useful commands:" -ForegroundColor Yellow
    Write-Host "  Container logs:" -ForegroundColor White
    Write-Host "    docker logs -f $ContainerName" -ForegroundColor Gray
    Write-Host ""
    Write-Host "  Stop the container:" -ForegroundColor White
    Write-Host "    docker stop $ContainerName" -ForegroundColor Gray
    Write-Host ""
    Write-Host "  Restart the container:" -ForegroundColor White
    Write-Host "    docker start $ContainerName" -ForegroundColor Gray
    Write-Host ""
    Write-Host "  Remove the container:" -ForegroundColor White
    Write-Host "    docker rm -f $ContainerName" -ForegroundColor Gray

    Write-Host ""
    Write-Host "⏳ Waiting for the server to start (may take ~30 seconds)..." -ForegroundColor Yellow
    Start-Sleep -Seconds 5

    Write-Host "📊 Checking logs..." -ForegroundColor Cyan
    docker logs $ContainerName
} else {
    Write-Host ""
    Write-Host "❌ An error occurred while starting the container!" -ForegroundColor Red
    exit 1
}

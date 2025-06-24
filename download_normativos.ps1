# Script PowerShell para descargar PDFs normativos - Geanet
param([string]$DestinationPath = ".\normativos")

Write-Host " Iniciando descarga de documentos normativos para Geanet..." -ForegroundColor Green

# Crear estructura de carpetas
$folders = @("crc", "mintic", "leyes", "decretos", "seguridad", "formatos", "mapas")
foreach ($folder in $folders) {
    $fullPath = Join-Path $DestinationPath $folder
    if (!(Test-Path $fullPath)) {
        New-Item -Path $fullPath -ItemType Directory -Force | Out-Null
    }
}

# Función para descargar PDFs
function Download-PDF {
    param([string]$Name, [string]$Url, [string]$Folder)
    
    $outputPath = Join-Path $DestinationPath "$Folder\$Name.pdf"
    Write-Host " Descargando: $Name" -ForegroundColor Yellow
    
    try {
        $webClient = New-Object System.Net.WebClient
        $webClient.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)")
        $webClient.DownloadFile($Url, $outputPath)
        Write-Host " $Name - Descargado exitosamente" -ForegroundColor Green
        return $true
    }
    catch {
        Write-Host " $Name - Error: $($_.Exception.Message)" -ForegroundColor Red
        "$Name,$Url,$($_.Exception.Message)" | Add-Content (Join-Path $DestinationPath "errores.log")
        return $false
    }
    finally {
        if ($webClient) { $webClient.Dispose() }
    }
}

Write-Host " Descargando Resoluciones CRC..." -ForegroundColor Cyan

# URLs CRC verificadas
$crcDocs = @{
    "CRC_5299_2018" = "https://www.crcom.gov.co/recursos_user/2018/Actividades_regulatorias/Resolucion_CRC_5299_2018.pdf"
    "CRC_5300_2018" = "https://www.crcom.gov.co/recursos_user/2018/Actividades_regulatorias/Resolucion_CRC_5300_2018.pdf"
    "CRC_5322_2018" = "https://www.crcom.gov.co/recursos_user/2018/Actividades_regulatorias/Resolucion_CRC_5322_2018.pdf"
    "CRC_5337_2018" = "https://www.crcom.gov.co/recursos_user/2018/Actividades_regulatorias/Resolucion_CRC_5337_2018.pdf"
    "CRC_5344_2018" = "https://www.crcom.gov.co/recursos_user/2018/Actividades_regulatorias/Resolucion_CRC_5344_2018.pdf"
    "CRC_5111_2017" = "https://www.crcom.gov.co/recursos_user/2017/Actividades_regulatorias/Resolucion_CRC_5111_2017.pdf"
}

foreach ($doc in $crcDocs.GetEnumerator()) {
    Download-PDF -Name $doc.Key -Url $doc.Value -Folder "crc"
    Start-Sleep -Milliseconds 500
}

Write-Host " Descargando Leyes..." -ForegroundColor Cyan

# URLs Leyes
$leyesDocs = @{
    "LEY_1341_2009_TIC" = "https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=36913"
    "LEY_679_2001" = "https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=4678"
    "LEY_1480_2011" = "https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=44306"
    "LEY_1581_2012" = "https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=49981"
}

foreach ($doc in $leyesDocs.GetEnumerator()) {
    Download-PDF -Name $doc.Key -Url $doc.Value -Folder "leyes"
    Start-Sleep -Milliseconds 500
}

# Crear documentos de referencia
@"
DOCUMENTOS NORMATIVOS DESCARGADOS PARA GEANET

Fecha: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")

CRC - Resoluciones:
- CRC 5299/2018 - Calidad del servicio
- CRC 5300/2018 - Medición de calidad
- CRC 5322/2018 - Publicidad
- CRC 5337/2018 - Atención al usuario
- CRC 5344/2018 - Regulaciones adicionales
- CRC 5111/2017 - Protección de usuarios

Leyes:
- Ley 1341/2009 - Ley de TIC
- Ley 679/2001 - Prevención explotación infantil
- Ley 1480/2011 - Estatuto del Consumidor
- Ley 1581/2012 - Protección de Datos

Estado: Ver errores.log si existe
"@ | Out-File -FilePath (Join-Path $DestinationPath "INDICE.txt") -Encoding UTF8

$pdfCount = (Get-ChildItem -Path $DestinationPath -Filter "*.pdf" -Recurse).Count
Write-Host " Total PDFs descargados: $pdfCount" -ForegroundColor Green

if (Test-Path (Join-Path $DestinationPath "errores.log")) {
    $errores = (Get-Content (Join-Path $DestinationPath "errores.log")).Count
    Write-Host " Errores: $errores (ver errores.log)" -ForegroundColor Red
}

Write-Host " ¡Completado! Documentos en: $DestinationPath" -ForegroundColor Green

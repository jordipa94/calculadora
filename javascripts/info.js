// Funcio per mostrar el Navegador utilitzat i la seva versio.
function InfoNavegador() {
    
    const userAgent = navigator.userAgent;
    let browserName = "Navegador desconegut";
    let browserVersion = "Versio desconeguda";

    if (userAgent.indexOf("Firefox") > -1) {
        browserName = "Mozilla Firefox";
        browserVersion = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
    } else if (userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Edg") === -1 && userAgent.indexOf("OPR") === -1) {
        browserName = "Google Chrome";
        browserVersion = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
    } else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1) {
        browserName = "Apple Safari";
        browserVersion = userAgent.match(/Version\/(\d+\.\d+)/)[1];
    } else if (userAgent.indexOf("Edg") > -1) {
        browserName = "Microsoft Edge";
        browserVersion = userAgent.match(/Edg\/(\d+\.\d+)/)[1];
    } else if (userAgent.indexOf("OPR") > -1) {
        browserName = "Opera";
        browserVersion = userAgent.match(/OPR\/(\d+\.\d+)/)[1];
    }

    document.getElementById("browserName").innerText = browserName;
    document.getElementById("browserVersion").innerText = browserVersion;
}

// Executem la funcio per mostrar la informacio.
InfoNavegador();

// Funcio per mostrar el Sistema Operatiu on es compila el codi.
function infoSo(){
    if(!("navigator" in window)){
      return "unknown";
    }

    const platform = (navigator.userAgentData?.platform);
   
   if(platform.startsWith("win")) return "windows";
   if(platform.startsWith("mac")) return "macos";
   if(platform.startsWith("lin")) return "linux";

   document.getElementById("platform").innerText = platform;
}
// Executem la funcio per mostrar la informacio.
infoSo();

// Data de l'ultima modificacio de la pagina.
document.getElementById("lastModified").innerText = document.lastModified;

// Idioma del navegador.
document.getElementById("language").innerText = navigator.language;

// Hostname (URL) de la pagina.
document.getElementById("hostname").innerText = window.location.href;
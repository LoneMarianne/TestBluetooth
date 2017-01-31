var macAddress = "00:06:66:07:B1:B7";



function onLoad(){
 document.addEventListener("deviceready", onDeviceReady, false);
}
function onDeviceRead(){
	bluetoothSerial.connect(macAddress, onConnect, onDisconnect);
}
/* / onConnect kaldes bluetoothSerial.subscribe, der kaldes når data modtages
 * data skal sendes med et slut tegn i dette eksempel er det \n, der indgår i
 * Arduino-kommandoen println()
 */
function onConnect() {
        bluetoothSerial.subscribe("\n", onMessage, subscribeFailed);
        document.getElementByID("statusDiv").innerHTML="Connected to " + macAddress + ".";        		
}
/*
 * Data vises i "fraArduinoDiv"
 */
function onMessage(data) {
        document.getElementByID("fraArduinoDiv").innerHTML = data;        
}
/*
 * bluetoothSerial.write sender data af formen 
 * ArrayBuffer, string, array of integers, or a Uint8Array.
 * I dette eksempel sendes en streng afsluttet med \n
 */
function sendToArduino(data) {
        bluetoothSerial.write(data + "\n");
}

function onDisconnect() {
        alert("Disconnected");
        statusDiv.innerHTML="Disconnected.";
}

function subscribeFailed() {
        alert("subscribe failed");
}
	
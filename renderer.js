const {ipcRenderer} = require('electron');


ipcRenderer.on('fileSelected', (event, videoPath) => {
    console.log(`Render received video path ${videoPath}`);
    ipcRenderer.send('fileSelected',videoPath )
    document.querySelector(".js-player").src = videoPath;
  });
  
ipcRenderer.on('convertVideo', (event, { videoPath, format }) => {
    ipcRenderer.send('convertVideo', videoPath, format);
});

// ipcRenderer.on('progressCompleted',(event,message) => {
//   document.querySelector("#messages").innerHTML = `<p>${message}</p>`
// });


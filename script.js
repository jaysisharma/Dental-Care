// navigator.mediaDevices.getUserMedia({ video: true })
//     .then(function (stream) {
//         const video = document.getElementById('video');
//         video.srcObject = stream;
//         video.play();
//     })
//     .catch(function (err) {
//         console.error('Error accessing the camera.', err);
//     });

// const video = document.getElementById('video');
// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// async function runFaceDetection() {
//     const faceLandmarksDetection = await tf.loadGraphModel('@tensorflow-models/face-landmarks-detection');
//     setInterval(async () => {
//         const predictions = await faceLandmarksDetection.estimateFaces({ input: video });
//         if (predictions.length > 0) {
//             // Draw rectangles around detected faces
//             predictions.forEach(prediction => {
//                 ctx.clearRect(0, 0, canvas.width, canvas.height);
//                 ctx.strokeStyle = '#00FF00';
//                 ctx.lineWidth = 2;
//                 ctx.beginPath();
//                 ctx.rect(prediction.boundingBox.topLeft[0], prediction.boundingBox.topLeft[1], prediction.boundingBox.width, prediction.boundingBox.height);
//                 ctx.stroke();
//             });
//         }
//     }, 100);
// }

// runFaceDetection();

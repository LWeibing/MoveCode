const string = `.skin * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.skin *::after {
  box-sizing: border-box;
}
.skin *::before {
  box-sizing: border-box;
}

body {
  position: relative;
}
.face {
  width: 300px;
  position: absolute;
  top: 14%;
  left: 50%;
  margin-left: -150px;
}
.eyebrow {
  width: 70px;
  height: 22px;
  background-color: #000;
  position: absolute;
  top: 0;
}
.eyebrow.left {
  left: 40px;
  transform: rotate(-30deg);
}
.eyebrow.right {
  right: 40px;
  transform: rotate(30deg);
}
.eye {
  border: 4px solid black;
  width: 110px;
  height: 154px;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  position: absolute;
  overflow: hidden;
  top: 50px;
}
.eye.left {
  left: 50%;
  margin-left: -120px;
  transform: rotate(8deg);
}
.eye.right {
  right: 50%;
  margin-right: -120px;
  transform: rotate(-8deg);
}
.eyeball {
  width: 70px;
  height: 100px;
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  margin-top: -50px;
  right: 12px;
}
.eye.left .eyeball {
  right: 12px;
  transform: rotate(-8deg);
}
.eye.right .eyeball {
  left: 12px;
  transform: rotate(8deg);
}
.eyeball::after {
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  top: 18px;
  left: 8px;
}
.eyelid {
  border: 4px solid black;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  position: absolute;
  top: 96px;
  right: 50%;
  background-color: rgb(218, 212, 243);
}
.eye.left .eyelid {
  margin-right: -334px;
}
.eye.right .eyelid {
  margin-right: -266px;
}
.mouth {
  width: 260px;
  height: 100px;
  position: relative;
  position: absolute;
  top: 220px;
  left: 50%;
  margin-left: -130px;
  overflow: hidden;
}
.mouth .up {
  border: 4px solid black;
  width: 600px;
  height: 800px;
  position: absolute;
  bottom: 64px;
  left: 50%;
  margin-left: -300px;
  border-radius: 50%;
  background-color: rgb(224, 144, 153);
  z-index: 1;
}

.mouth .down {
  border: 4px solid black;
  width: 400px;
  height: 1000px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -200px;
  border-radius: 50%;
  background-color: rgb(67, 17, 26);
  overflow: hidden;
}
.down::after {
  border: 4px solid black;
  content: "";
  display: block;
  width: 34px;
  height: 34px;
  background-color: #fff;
  position: absolute;
  bottom: 34px;
  left: 50%;
  margin-left: -17px;
}
.mouth .down .tongue {
  width: 600px;
  height: 800px;
  border-radius: 50%;
  position: absolute;
  bottom: -760px;
  left: 50%;
  margin-left: -300px;
  background-color: rgb(249, 198, 207);
}
.eyeball{
  animation: 3s linear infinite blink;
}
@keyframes blink {
  0% {
      transform: translate(0,0);
  }
  25% {
    transform: translate(-20px,0);
}
50% {
  transform: translate(0,0);
}
  75% {
      transform: translate(20px,0);
  }
  100% {
      transform: translate(0,0);
  }
}
`;
export default string;

// Visually checked uploads contain a separate color-calibration cube, not fish anatomy.
// Limit this rule to those exact assets; never guess from names in unrelated models.
const calibratedModels=new Set(['suzuki','kurodai','maiwashi','kanpachi','isaki','anago','ayu','magochi'].map(slug=>`/models/${slug}.glb`));
export function modelCalibrationNodes(src:string):readonly string[]{return calibratedModels.has(src.split('?')[0])?['Cube_2']:[];}
// The replacement trout is authored facing the camera; start at its side profile.
export function modelInitialYaw(src:string){return src.split('?')[0]==='/models/nijimasu.glb'?-Math.PI/2:0;}

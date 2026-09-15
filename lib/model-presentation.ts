// Visually checked uploads contain a separate color-calibration cube, not fish anatomy.
// Limit this rule to those exact assets; never guess from names in unrelated models.
const calibratedModels=new Set(['suzuki','kurodai','maiwashi','kanpachi','isaki','anago','ayu','magochi','akahata','houbou','itoyoridai','kijihata','kouika','mahaze','mejina','hirame','aji'].map(slug=>`/models/${slug}.glb`));
export function modelCalibrationNodes(src:string):readonly string[]{return calibratedModels.has(src.split('?')[0])?['Cube_2']:[];}
// These visually checked uploads face the camera; begin with their side profile.
export function modelInitialYaw(src:string){return ['nijimasu','ainame','oomonhata','yariika'].some(slug=>src.split('?')[0]===`/models/${slug}.glb`)?-Math.PI/2:0;}

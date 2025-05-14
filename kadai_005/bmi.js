//体重と身長を変数に代入
const weight = 68;    //kg
const height = 1.7;   //m

//BMIを計算して変数に代入
const bmi =weight / (height * height);

//コンソールに出力
console.log('体重:',weight,'kg');
console.log('身長:',height,'m');
console.log('BMI:',bmi);
console.log('BMI(小数点以下2桁):',bmi.toFixed(2));
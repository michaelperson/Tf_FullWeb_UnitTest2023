const assert = require('assert');
const MathUtils =  require("../modules/math-utils.js");
// //ARRANGE
// 
// console.log(MathUtils);
// //ACT
// let reponse = MathUtils.addition(4,5);
// //ASSERTION
// assert.strictEqual(reponse,9);

//je créé un "group de tests"
describe("Math utils test", function()
{
    //Mon premier groupe de test pour 1 unité 
    describe("Addition", function()
    {
        //Test de cas logique
        //test 1  de l'addition
        it("Je devrais obtenir 9 si j'additionne 4 et 5", function(){
            const actual = MathUtils.addition(4,5);
            const exceptedResult = 9;

            assert.strictEqual(actual,exceptedResult);
        });
        //test2 de l'addition
        it("Je devrais obtenir 10,5 si j'additionne 5,5 et 5", function(){
            const actual = MathUtils.addition(5.5,5);
            const exceptedResult = 10.5;

            assert.strictEqual(actual,exceptedResult);
        });

        //test de cas limites
         //test 3  de l'addition qui va envoyer une exception
        it("Je devrais obtenir un message d'erreur si j'envoie des paramètres de type autre que nombre", function(){
            assert.throws(()=> 
            {
                 //test mon code critique
                const actual = MathUtils.addition("zorro","tornado");
            }, /Error: Vous devez envoyer que des nombres/i);                        
            
        });

        //test 4 -> je n'envoie pas de paramètre à ma fonction
        it("Je dois obtenir une exception si je ne passe pas de paramètres", function(){
            assert.throws(()=>{
                 const actual = MathUtils.addition();                

            },/Error: Aucun paramètre transmis/i);
        });
        
    });

    //Test unitaire pour la soustraction
});
 
const MathUtils = {

    addition: (...numbers)=>
    {
        //il me faut des pramètres
        if(numbers.length===0)
        {
            throw new Error("aucun paramètre transmis");
        }

         //est-ce que je n'ai que des nombres dans mes paramètres
         if(numbers.find(n=> typeof(n)!=="number") != undefined)
         {
            throw new Error("Vous devez envoyer que des nombres");
         }

        //  let sum =0;
        //  numbers.forEach((n)=> { sum+= n;});
        //  return sum;

        return numbers.reduce((sum,current)=> sum+current,0);
    }
      



}

module.exports = MathUtils;
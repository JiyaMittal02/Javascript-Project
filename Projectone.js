/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let arrayofNFTs=[]
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (artworkname,artist,Yearofcreation,loc) 
{
    const NFT={
        "Name of artwork":artworkname,
        "Artist":artist,
        "CreationYear":Yearofcreation,
        "Location of exhibition":loc
    }//object
    arrayofNFTs.push(NFT);
    console.log("Artwork added successfully to collection (minted) : "+artworkname);

}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () 
{
    for(let i=0;i<arrayofNFTs.length;i++)
    {
        console.log("\nMetadata of NFT "+(i+1)+" is :-");
        console.log("Artwork name : "+arrayofNFTs[i]["Name of artwork"]);
        console.log("Artist name : "+arrayofNFTs[i]["Artist"]);
        console.log("Year of creation : "+arrayofNFTs[i]["CreationYear"]);
        console.log("Location of exhibition : "+arrayofNFTs[i]["Location of exhibition"]);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply()
{
    console.log("Total number of NFTs minted are : "+arrayofNFTs.length);
}

// call your functions below this line

mintNFT("The Starry Night","Vincent van Gogh","1889","NewYork");
mintNFT("Mona Lisa","Leonardo da Vinci","1503","Paris");
mintNFT("The Persistence of Memory","Salvador Dalí","1931","NewYork");
mintNFT("The Birth of Venus","Sandro Botticelli","1486","Florence");
mintNFT("The Great Wave off Kanagawa","Katsushika Hokusai","1831","Tokyo");
console.log("Data in each NFT is as follows ");
listNFTs();
console.log("\n");
getTotalSupply();

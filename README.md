# Welcome to Pixel!
![](https://github.com/GaussianNeurons/Pixel/blob/main/Images/Logo.png)

**Pixel** is an application designed to promote and gamify financial literacy for the pre-teens and teens. As children learn to save and manage their money, NFTs are unlocked when savings goals are met. Children can browse their NFT collection and swap them on the open marketplace, learning the core fundamentals of market making. Furthermore, as these NFTs are stored in their Ethereum wallet address, they can be imported and used in various Metaverse and decentralized games popular among teens.  Hundreds of pixels make up an NFT, but only **ONE** Pixel empowers teens to start their financial journey.

# Our Inspiration
3 out of 4 teens lack knowledge and confidence in personal finance, while 73% also want to increase their understanding of money matters. And experts in financial literacy say that hands-on money management experience is key, and particularly savings accounts help children learn about saving and spending. But, how do you get a child interested in finance? How do you make the learning process fun?  There are many financial literacy apps for kids, but they lack connecting to what pre-teens and teens are interested in. Therefore, it makes learning about finance just feel like you’re in the classroom again. Pixel aims to connect finance to things that kids are ACTUALLY interested in – games (especially video games)! Pixel gamifies financial literacy to truly make learning about finance fun – in fact, you may even forget your learning when you’re using Pixel.

*“The beauty of starting with a savings account is, it’s teaching them to make deposits and watch that balance go up,” -Bill Hensley, Senior Director of Education for the National Endowment for Financial Education.*

# What can Pixel do? 

Pixel is an application designed to promote and gamify financial literacy for the pre-teens and teens. As children learn to save and manage their money, NFTs are unlocked when savings goals are met.  

Children can browse their NFT collection and swap them on the open marketplace, learning the core fundamentals of market making. Furthermore, as these NFTs are stored in their Ethereum wallet address, they can be imported and used in various metaverse and decentralized games popular among teens, incentivizing kids to continue to save so they can unlock more great NFTs.    

Pixel integrates with any bank’s mobile digital banking application. Parents can link Pixel to their children’s checking and savings accounts so that children can learn to save while having fun. Parents have full visibility and control over their children’s accounts, and Pixel, to help monitor and encourage their children to save.  

# Technology

## Pixel APP

While a generative model is creating thousands of unique NFT’s, a smart contract is uniquely publishing each digital asset to the blockchain and then transfers ownership to the recipient's crypto wallet address. The smart contract was built in solidity, a programming language for implementing smart contracts on blockchains. Our Smart Contract imports libraries that implement ERC-721 standards, called ‘OpenZeppelin’, and provides pre-tested contracts that allows us to securely interact with blockchains like Ethereum. Our Smart Contract takes in the recipient's wallet address and the URI token of the NFT’s metadata. Each NFT image and metadata file are stored into a decentralized system called IPFS, where we can use the URI token to call it publicly. Our smart contract is powering our react.js application which uses truffle and ganache for deploying and developing our smart contract onto the Ethereum blockchain as well as web3.js which allows us to interact with local Ethereum nodes. 

## NFT Generation

Built with Python, we used two state-of-the-art (SOTA) deep learning models from generative modeling to create new and unique NFTs. Specifically, we used a PyTorch implementation of Deep Convolutional Generative Adversarial Networks (DCGANs) and OpenAI’s GPT-2 text generation model, modified to work with images. DCGANs combine GANs, which are SOTA for generative modeling, and deep convolutional networks, which are SOTA for image classification making them well suited for novel image synthesis. GPT-2 is another SOTA model typically used for automatic speech and text generation, but what’s exciting is that we were able to modify it so that it can work with image generation as well. To do that, we encoded the original CryptoPunk images as sequences of RGB values from their pixels and then used the sequences to finetune the existing GPT-2  model. Finetuning is a popular technique to adapt an existing model to one’s application of interest without going through the long and arduous training process. GPT-2 was then able to generate unique sequences that were similar to the original ones, which were converted back into an image format.

The NFTs were pre-processed and post-processed using the Open-CV and Pillow packages. Other packages which were used were Glob to obtain the dataset of images, Tensorflow and PyTorch for the model infrastructure, Numpy for basic mathematical operations, and Pickle for saving and checkpointing our models during training.

**Experimenting NFT Generation:**

For anyone who's interested in the deep learning methods that we used for the NFT Generation and want to try them out yourself, please check the **NFT_GENERATION** folder where we inlcuded two jupyter notebooks for both of the DCGAN and GPT2 models. 

# Installation

## Prerequisites
* Ganche Installed here: https://trufflesuite.com/ganache/ 
* truffle ``` npm install -g truffle@5.0.5 ```
* MetaMask extension installed here: https://metamask.io/

### Getting Setup
Open Terminal and git clone project and navigate to project name.
1. ``` truffle compile ``` (compiles the smart contract to make sure everything works)
	* Make sure Ganache is running
	* Open Ganache
	* Create New WorkSpace
	* Add truffle project - Select the ‘Truffle-config.js’ from this project
 * Save Workspace *Make sure in Ganache the RPC Server is : ‘HTTP://127.0.0.1:7545’ and Network ID is : 5777 . Should be the same inside ‘truffle-   config.js’ file under host  and port this is how it is talking to Ganache , our local blockchain
 
2. ``` Truffle Migrate ```  (migrates the smart contracts to the network)
To start app in browser navigate to project file and inside another terminal ```npm run start```

Connecting Metamask to Ganache:
 * From Metamask Click on ‘Network’ and create/connect to the same network that Ganache is running on (‘HTTP://127.0.0.1:7545’)

Importing an account from Ganache to Metamask:

 * In Ganache select any account from the accounts list and select ‘Show Keys’
 * Copy the ‘Private Key’
 * Click on Metamask then ‘Import Account’, Select Type: ‘Private Key’, Paste private key and select Import

# Resources

 - https://openai.com/blog/better-language-models/
 - https://www.tensorflow.org/tutorials/generative/dcgan
 - https://medium.com/mlearning-ai/generate-nft-cryptopunks-with-deep-convolutional-generative-adversarial-network-dcgan-db35f0a1adb4
 - https://medium.com/mlearning-ai/generate-nft-cryptopunks-with-gpt-2-generative-pre-training-transformer-4aa405b27bfd
 - https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/

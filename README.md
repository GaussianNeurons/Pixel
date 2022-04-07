# Welcome to Pixel!

![](https://github.com/GaussianNeurons/Pixel/blob/main/Images/logo.png)
**Pixel** is an application designed to promote and gamify financial literacy for the pre-teens and teens. As children learn to save and manage their money, NFTs are unlocked when savings goals are met. Children can browse their NFT collection and swap them on the open marketplace, learning the core fundamentals of market making. Furthermore, as these NFTs are stored in their Ethereum wallet address, they can be imported and used in various Metaverse and decentralized games popular among teens.  Hundreds of pixels make up an NFT, but only **ONE** Pixel empowers teens to start their financial journey.

# Technology

## Pixel APP

While a generative model is creating thousands of unique NFT’s a smart contract is uniquely publishing each digital asset on the blockchain, this process is called minting, and then it can transfer ownership to the recipient's crypto wallet address. The smart contract was built in solidity, a programming language for implementing smart contracts on blockchains.  The Smart Contract imports libraries that implement ERC-721 standards, called ‘OpenZeppelin’, and provides pre-tested contracts that allows us to securely interact with blockchains like Ethereum. The Smart Contract takes in the recipient's wallet address and the URI token of the NFT’s metadata. Each NFT image and metadata file are stored into a decentralized system called IPFS, where we can use the URI token to call it publicly.

## NFT Generation

Built with Python, we used two state-of-the-art (SOTA) deep learning models from generative modeling to create new and unique NFTs. Specifically, we used a PyTorch implementation of Deep Convolutional Generative Adversarial Networks (DCGANs) and OpenAI’s GPT-2 text generation model, modified to work with images. DCGANs combine GANs, which are SOTA for generative modeling, and deep convolutional networks, which are SOTA for image classification making them well suited for novel image synthesis. GPT-2 is another SOTA model typically used for automatic speech and text generation, but what’s exciting is that we were able to modify it so that it can work with image generation as well. To do that, we encoded the original CryptoPunk images as sequences of RGB values from their pixels and then used the sequences to finetune the existing GPT-2  model. Finetuning is a popular technique to adapt an existing model to one’s application of interest without going through the long and arduous training process. GPT-2 was then able to generate unique sequences that were similar to the original ones, which were converted back into an image format.

The NFTs were pre-processed and post-processed using the Open-CV and Pillow packages. Other packages which were used were Glob to obtain the dataset of images, Tensorflow and PyTorch for the model infrastructure, Numpy for basic mathematical operations, and Pickle for saving and checkpointing our models during training.



# Resources

 - https://openai.com/blog/better-language-models/
 - https://www.tensorflow.org/tutorials/generative/dcgan
 - https://medium.com/mlearning-ai/generate-nft-cryptopunks-with-gpt-2-generative-pre-training-transformer-4aa405b27bfd

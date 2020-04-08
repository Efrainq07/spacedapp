
const address_input = document.getElementById("address");
const address_button = document.getElementById("address-button");
var contract = TruffleContract(Spacedrop);


const sp_address = '0x417ED26A4B936d127E95f884953C41D613300C84';
const token_address = '0x31fd9db46b364292d82291047D9c52F7FDc8DeC5';
const funds_address = '0xf950b893fe9364e75855d6e689dee014a1264de3';



function setProvider () {
    if (window.ethereum) {
        ethereum = window.ethereum
        web3Provider = new Web3(ethereum)
      contract.setProvider(web3Provider.currentProvider)
      contract.defaults({from: web3Provider.eth.defaultAccount})

      return true
    } else return false
}

function spaceDropping(address){
    contract_instance.claimTokensERC20(token_address,funds_address,address,0)
}

function main(){
    const result = setProvider()
    if(result){
        
        

        ethereum.enable().then((account) => {
            const defaultAccount = account[0]
            web3Provider.eth.defaultAccount = defaultAccount
        })

        contract.at(sp_address).then(function(instance){
            contract_instance = instance
        })

        address_button.addEventListener('click', function(){
            spaceDropping(address_input.value);
        })

    }
}


main()
const readline = require('readline-sync')

const Chain = require('./src/chain')	

// Create a new chain
const chain = new Chain

// Add a new blocks to the chain
chain.addBlock({ amount: 33 })
chain.addBlock({ amount: 10 })
chain.addBlock({ amount: 44, message: 'BTC > All' })

// Print the chain
//console.log(chain.instance)

// Print the chain
//console.log(chain.isValid()) // true
//chain.instance[1].data.amount = 9001 // ataque malicioso OVER NINE THOUSAND !!!
//console.log(chain.isValid()) // false

function main() {
  clear()
  let op
  
  do{
    op = readline.questionInt('1. Add a new block\n2. Print the chain\n0. Exit\n')
    clear()
    switch(op) {
      case 1:
        const amount = readline.questionInt('Amount: ')
        const message = readline.question('Message: ')
        chain.addBlock({ amount, message })
        console.log('Block added!')
        clear(true)
        break;
      case 2:
        console.log(chain.instance)
        clear(true)
        break;
      case 0:
        console.info("Bye!")
        break;
      default:
        console.error("Invalid option")
        clear()
        break;
    }

  } while(op !== 0)
}

function clear(pressAnyKey) {
  if(pressAnyKey)
    readline.keyIn('Press any key to continue...')
  console.clear()
}

main()
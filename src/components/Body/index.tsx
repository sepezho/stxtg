import { Launch, HeaderContainer, Logo, RoadmapList } from './styles'

const loadImage = (imageName: string) => {
  return require('../../static/img/' + imageName) as any
};

const Body = () => {
  return (
    <HeaderContainer >
      <a href={'https://app.stx.tg'}>
        <Launch>
          Launch app
        </Launch>
      </a>
      <br />
      <Logo src={loadImage("s.png")} />
      This is the first synthetic derivatives protocol on the TON blockchain.
      <h2>Problem</h2>
      <span>Toncoin whales can`t participate in TON DeFi with all of locked value that they have. You can't sell 1B toncoins on the CEX because there is <u>no such demand</u>.</span>
      <h2>Solution</h2>
      <span>Convert toncoins to synthetic derivatives of all different kinds and feed DeFi ecosystem with them to <u>increase TVL</u>.</span>
      <h2>Tech</h2>
      <span>All of the business logic is implemented on the FunC smart contracts. Prices are fetched directly from the <a href="https://pyth.network">Pyth</a> and <u>verified fully onchain</u> by the smart contracts.
        Each price is backed by 19 wormhole guardian signatures. Only web application and ton blockchain - no middlewares / no backends.</span>
      <br />
      <span>Core concepts (such as c-ratio) & all of the financial math were inspired by <a href="https://synthetix.io">Synthetix</a> protocol.</span>
      <br />
      <br />
      <span>fork by new team - <a href={"https://syde.fi"}>syde</a></span>
      <span>created by <a href={"https://sepezho.com"}>sepezho</a></span>
    </HeaderContainer >
  )
}

export default Body;

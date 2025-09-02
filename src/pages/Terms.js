import React from 'react';

const App = () => {
  return (

    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        xintegrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <div className=" text-dark">
        {/* Header section with a bold, centered title */}
        <header className="py-5 bg-transparent ">
          <h4 className="display-4 fw-bold text-left text-dark px-3">Terms and Conditions<br></br>INTRODUCTION</h4>
        </header>

        {/* Main content area, using Bootstrap's container for responsiveness */}
        <main className="container py-5">
          <Terms />
        </main>

      </div>
    </>
  );
};

// Your provided Terms component with Bootstrap styling applied
const Terms = () => {
  return (
    <div className="bg-transparent   p-4 p-md-1 mb-5">
      <p className="mb-4  text-secondary ">
        This Risk Disclosure and Warning Notice is provided to you, whether you are an existing or prospective client, in accordance with the requirements of the Financial Services Commission (FSC) under the Securities Act 2005, Rule 4 of the Securities (Licensing) Rules 2007, and the Financial Services (Consolidated Licensing and Fees) Rules 2008, as applicable to Money Plant FX (hereinafter referred to as the “Company”).
      </p>

      <p className="mb-4 lh-base text-secondary">
        Investing in financial instruments such as Foreign Exchange (Forex), Contracts for Difference (CFDs), and other derivative products involves a high level of risk and may not be suitable for all investors. Each financial instrument has distinct characteristics and associated risks. This notice aims to outline some of the key risks related to trading these instruments and should be reviewed in conjunction with the Company’s Terms and Conditions.
      </p>

      <p className="mb-4 lh-base text-secondary">
        We strongly advise all clients and potential clients to carefully read and understand this Risk Disclosure Notice prior to applying for a trading account and before initiating any trading activity with the Company. Please note that this document does not provide an exhaustive explanation of all possible risks or important considerations when dealing with financial instruments. Rather, it is intended to offer a general overview in a clear, fair, and non-misleading manner.
      </p>

      <p className="mb-4 lh-base text-secondary">
        Clients should only engage in trading activities if they fully understand the nature of the financial instruments involved and the extent of their risk exposure. Trading leveraged products such as Forex, CFDs, and other derivatives carries the risk of substantial losses and may not be appropriate for all investors. You are encouraged to assess whether trading aligns with your financial goals, level of experience, and risk appetite. If in doubt, we recommend seeking independent professional financial advice.
      </p>

      <p className="mb-4 lh-base text-secondary">
        Please be aware that the value of your investments can fluctuate due to market conditions, and there is no guarantee that you will recover the full amount invested. Moreover, past performance is not indicative of future results.
      </p>

      <p className="mb-4 lh-base text-secondary">
        For the purposes of this notice, “Financial Instruments” refer to Forex, Contracts for Difference (CFDs), and any other derivative products offered by the Company.
      </p>

      <h3 className="h3 fw-semibold mt-5 mb-3 text-dark">Description of Contract for Difference (CFD)</h3>
      <p className="mb-4 lh-base text-secondary">
        A Contract for Difference (CFD) is a financial derivative that allows traders to speculate on the price movement of an underlying asset without actually owning it. A CFD is essentially an agreement between the trader and the CFD provider to exchange the difference in the value of an asset between the time the contract is opened and when it is closed. Instead of purchasing or selling the actual underlying instrument, the trader enters into a position based on the anticipated price movement.
      </p>
      <p className="mb-4 lh-base text-secondary">
        The price of a CFD mirrors the price of the underlying asset, and any profit or loss is determined by the difference between the asset’s value at the opening and closing of the contract, multiplied by the number of units involved. This mechanism enables traders to potentially profit from both rising and falling markets.
      </p>
      <p className="mb-4 lh-base text-secondary">
        CFDs are available on a wide range of asset classes, including but not limited to: Foreign Exchange (Forex) CFDs, Futures CFDs, Options CFDs, Share CFDs, Stock Index CFDs, and Cryptocurrency CFDs.
      </p>
      <p className="mb-4 lh-base text-secondary">
        CFDs offer a flexible way to gain exposure to financial markets without owning the underlying assets. However, they are complex instruments and carry a high risk of loss. Due to the use of leverage, losses can exceed the initial margin and any additional margin funds deposited.
      </p>
      <p className="mb-4 lh-base text-secondary">
        Traders may be required to close positions at unfavorable prices, particularly during periods of high volatility.
      </p>
      <p className="mb-4 lh-base text-secondary">
        When holding CFD positions overnight, clients are typically subject to financing charges, also known as SWAP or rollover fees. These costs reflect the interest that would be incurred if the trader had borrowed the funds to maintain the position. If a CFD position is opened and closed within the same trading day, no financing charges apply. However, holding long positions over multiple days can result in significant cumulative financing costs.
      </p>

      <h3 className="h3 fw-semibold mt-5 mb-3 text-dark">Example of trading in CFDs</h3>
      <p className="mb-4 lh-base text-secondary">
        Only a small portion of the entire trade value, typically between 0.2% and 100% (Leverage = 1:500 to 1:1), must be deposited in order to initiate a CFD position. Therefore, compared to paying for the trade in full, CFD trading gives the chance for a significantly higher return on your initial investment.
      </p>
      <p className="mb-4 lh-base text-secondary">
        However, as the following example illustrates, any losses will be magnified in the same manner: You would win (or lose) 5% if you purchased 10,000 shares directly and the price of those shares changed by 500 euros.
      </p>
      <p className="mb-4 lh-base text-secondary">
        A 50% profit (or loss) would result from opening a CFD on the same shares with a 10% (1:10) margin. Your initial investment would be €1,000, and the value would still vary by €500. It should be mentioned that the company will always keep an eye on the leverage used on the client’s positions. Depending on the client’s trading volume, the company retains the right to reduce the leverage.
      </p>

      <h3 className="h3 fw-semibold mt-5 mb-3 text-dark">How CFDs differs from underlying securities</h3>
      <p className="mb-4 lh-base text-secondary">
        Shares of common stock represent a fractional ownership interest in the issuer of that security. Ownership of securities confers various rights that are not present with positions in CFDs. For example, persons owning a share of common stock may be entitled to vote in matters affecting various corporate actions.
      </p>
      <p className="mb-4 lh-base text-secondary">
        They also may be entitled to receive dividends and corporate disclosure, such as annual and quarterly reports. The purchaser of a CFD, by contrast, has only a contract for future settlement. The purchaser of the CFD is not entitled to exercise any voting rights over the underlying security and is not entitled to any dividends that may be paid by the issuer.
      </p>
      <p className="mb-4 lh-base text-secondary">
        Moreover, the purchaser of a CFD does not receive the corporate disclosures that are received by shareholders of the underlying security. Owning the underlying security does not require an investor to meet any margin requirements in contrast with CFDs leveraged trading.
      </p>

      <h3 className="h3 fw-semibold mt-5 mb-3 text-dark">Prohibited Trading Activities</h3>
      <p className="mb-4 lh-base text-secondary">
        The use of any automated or non-manual trading methods—including but not limited to software programs, trading bots, AI bots, algorithmic trading, robo trading, ECN strategies, or scalping—is strictly prohibited on the Moneyplant FX platform. Engaging in any such activities will result in the immediate forfeiture of all profits generated through these means, seizure of the trading account, and denial of any withdrawal requests.
      </p>

      <h3 className="h3 fw-semibold mt-5 mb-3 text-dark">Risks & Warnings associated with transactions in Forex, CFDs or any other derivative product</h3>
      <p className="mb-4 lh-base text-secondary">
        Only customers who (a) understand and are willing to assume the economic, legal, and other risks involved, (b) have experience and knowledge of trading in Forex, CFDs, or any other financial derivative product, and (c) are financially able to assume losses significantly greater than margin or deposits should consider trading in these highly speculative financial derivatives.
      </p>
      <p className="mb-4 lh-base text-secondary">
        Regardless of the information provided by the company, the client should fully understand and accept that the value of forex, CFDs, or any other financial derivative product may move either upward or downward, and that it is even likely that the investment may lose all of its value. Like any high-risk investment, product, you should not risk any funds that you cannot afford to lose, such as your retirement savings, medical and other emergency funds, funds set aside for purposes such as education or home ownership, proceeds from student loans or mortgages, or funds required to meet your living expenses.
      </p>
      <p className="mb-4 lh-base text-secondary">
        The Client should unreservedly acknowledge and accept that he runs a great risk of incurring losses and damages as a result of the dealing in Forex, CFDs or any other financial derivative product and accepts and declares that he is willing to undertake this risk.
      </p>
      <p className="mb-4 lh-base text-secondary">
        Due to changes in legislation or his own circumstances, the client should assume the risk that his trades in forex, CFDs, or any other financial derivative product may be or become subject to tax and/or other duties. The company does not guarantee that there will be no tax or other stamp duty due. The company does not provide tax advice, and if the client has any questions, it is advised that they see a qualified tax expert. The client shall be in charge of paying any taxes or other fees that may be incurred as a result of his trades.
      </p>
      <p className="mb-4 lh-base text-secondary">
        It is noted that taxes are subject to change without notice.
        If required by applicable Law, the Company shall deduct at source from any payments due to the Client such amounts as are required by the tax authorities to be deducted in accordance with applicable Law.
      </p>
      <p className="mb-4 lh-base text-secondary">
        It is possible that other costs, including taxes, relating to Transactions carried out on the Trading Platform to arise, for which the Client is liable, and which are neither paid via us nor imposed by the Company. Although it is the Client’s sole and entire responsibility to account for tax due and without derogating from this, the Client agrees that the Company may deduct tax, as may be required by the applicable law, with respect to his trading activity on the Trading Platform. The Client is aware that the Company has a right of set-off against any amounts in the Client’s Trading Account with respect to such tax deductions.
      </p>
      <p className="mb-4 lh-base text-secondary">
        It is noted that the prices displayed on the Company’s Trading Platform reflects the last known available price at the moment, prior to placing any order. As such, the price that the Client receives when he opens or closes a position may not directly correspond to real time market levels at the point in time at which the sale of the CFD occurs or reflect the prices of third-party brokers/providers.
      </p>
      <p className="mb-4 lh-base text-secondary">
        One characteristic of Forex, CFDs, and other financial derivative products is their high degree of “gearing” or “leverage,” which means that even a slight fluctuation in the underlying market can have a disproportionate impact on the client’s trade.
      </p>
      <p className="mb-4 lh-base text-secondary">
        In the event that the market goes against the client’s position, the customer can be asked to quickly and significantly increase his margin (funds) in order to keep his position. The client’s position can be closed at a loss if he doesn’t respond with a request for more money within the allotted period. If the notices are sent to your designated contact points, you will be considered to have received a notice demanding the payment of such money even if you are not home or do not receive the messages we leave for you.
      </p>
      <p className="mb-4 lh-base text-secondary">
        A loss (which may or may not result in a margin call) may require the Client to immediately provide additional funds to the Company to maintain the open positions. The Company may also change its rates of initial margin and/or notional trading requirements at any time, which may result in a change to the margin the Client is required to maintain.
      </p>
      <p className="mb-4 lh-base text-secondary">
        When trading Forex, CFDs, or other financial derivative products, clients are subject to financing charges that reflect the cost of borrowing funds to maintain their positions. These charges, commonly referred to as SWAP fees, are applied for each day the position is held overnight. If a client opens and closes a position within the same trading day, no financing cost is incurred.
      </p>
      <p className="mb-4 lh-base text-secondary">
        However, if a long position is maintained over a longer period, these financing costs can accumulate and become significant. It is also important to note that clients holding short positions do not earn interest. Specific details regarding applicable financing charges are disclosed during the account opening process.
      </p>
      <p className="mb-4 lh-base text-secondary">
        Transactions involving Forex, CFDs, or other financial derivative products are executed exclusively through the Company’s proprietary trading platform and are not conducted on a recognized stock exchange or a Multilateral Trading Facility (MTF). As a result, such transactions may carry higher risk compared to those conducted on regulated markets. Since the Company acts as the sole counterparty to every client transaction, the trading platform does not meet the definition of a recognized exchange or MTF. Accordingly, all trading terms, including execution rules and pricing, are set exclusively by the Company. Clients must close any open positions within the operating hours of the Company’s trading platform, and all positions must be closed with the same counterparty through which they were initiated—namely, the Company.
      </p>
      <p className="mb-4 lh-base text-secondary">
        In compliance with applicable regulations, the Company may be required to hold client funds in segregated accounts—separate from both Company funds and other clients’ funds. These funds are deposited promptly into one or more client accounts maintained with reputable financial institutions, which may be located within or outside of Mauritius. While the Company exercises due diligence, skill, and care in selecting such institutions in accordance with regulatory obligations, it is important to understand that certain risks remain beyond the Company’s control. Consequently, the Company cannot be held liable for any loss incurred due to the insolvency, failure, or any similar event affecting the financial institution holding the client’s funds.
      </p>
      <p className="mb-4 lh-base text-secondary">
        The client’s funds may be held at a financial institution inside or outside of Mauritius. It is acknowledged that any such financial institution operating outside of Mauritius will be subject to a different legal and regulatory framework than that of Mauritius. Therefore, in the case of bankruptcy or any other.
        Certainly! Below is a professionally rephrased version of your text with a formal, clear, and compliant tone suitable for use in legal, financial, or regulatory documentation:
      </p>
      <p className="mb-4 lh-base text-secondary">
        In the event of insolvency or similar proceedings affecting a third party, client funds may not receive the same level of protection as they would if held in a segregated account within Mauritius.
      </p>
      <p className="mb-4 lh-base text-secondary">
        In the case of insolvency or default by the Company, open positions may be liquidated or closed without the Client’s prior consent.
      </p>
      <p className="mb-4 lh-base text-secondary">
        Clients do not acquire any rights or obligations in relation to the underlying assets associated with Forex, CFDs, or any other financial derivative products. These products are purely speculative and do not involve ownership of the underlying instruments.
      </p>
      <p className="mb-4 lh-base text-secondary">
        Where Forex, CFDs, or any other financial derivative products are settled in a currency other than the Client’s base currency, the value of returns may be impacted by currency conversion rates, potentially affecting the final result.
      </p>
      <p className="mb-4 lh-base text-secondary">
        Any market commentary or general trading recommendations provided by the Company are not to be interpreted as personal investment advice, offers to buy or sell, or solicitations to engage in any financial transaction. These are not tailored to the Client’s personal financial situation or investment objectives. Each decision to trade remains the sole responsibility of the Client. The Company is not acting as a financial advisor and assumes no liability for any losses or costs incurred as a result of acting on general recommendations, including legal or professional fees.
      </p>
      <p className="mb-4 lh-base text-secondary">
        The Company makes no guarantees of profit or protection from loss in relation to Forex, CFDs, or any other financial derivative products. The Client acknowledges having received no such assurances from the Company or its representatives and affirms their financial capacity to assume the risks and withstand potential losses.
      </p>
      <p className="mb-4 lh-base text-secondary">
        In the case of any quoting or pricing errors (including typographical errors, erroneous responses to client requests, etc.), the Company is not liable for inaccuracies in account balances and reserves the right to make necessary corrections or adjustments.
      </p>
      <p className="mb-4 lh-base text-secondary">
        During the account application process, the Client is required to complete an appropriateness assessment. Based on the information provided, the Company may warn the Client if such financial instruments are deemed unsuitable for their profile.
      </p>
      <p className="mb-4 lh-base text-secondary">
        The Client is responsible for maintaining the confidentiality of their login credentials and ensuring that no third party gains unauthorized access to their trading account. The Client will be held liable for any transactions executed using their credentials, even if such use was unauthorized or wrongful.
      </p>
      <p className="mb-4 lh-base text-secondary">
        Before initiating any trades, the Client should fully understand all commissions, spreads, and other applicable charges. Where charges are not stated in absolute monetary terms, it is the Client’s responsibility to request a clear explanation, including examples where necessary, to assess the financial impact of such charges.
      </p>
      <p className="mb-4 lh-base text-secondary">
        All relevant costs and charges applicable to trading will be made available by the Company either through its official website, trading platform, mobile application, or client portal, as applicable. Clients are expected to be fully aware of such costs, as they may directly affect the profitability of their trading account.
      </p>
      <p className="mb-4 lh-base text-secondary">
        The Client expressly declares and confirms that they have read, understood, and accepted the following:
      </p>
      <ul className="list-unstyled mb-4 ps-3 text-secondary"> {/* list-unstyled removes default bullets, ps-3 adds left padding */}
        <li className="mb-2">Past performance of a Financial Instrument is not a reliable indicator of current or future performance. Historical data should not be interpreted as a forecast or guarantee of future results.</li>
        <li className="mb-2">Some Financial Instruments may be illiquid or difficult to sell, especially during periods of low demand, which may prevent the Client from exiting a position or obtaining up-to-date valuation or risk information.</li>
        <li className="mb-2">When trading a Financial Instrument denominated in a currency different from that of the Client’s country of residence, fluctuations in exchange rates may adversely impact the instrument’s value, price, and overall performance.</li>
        <li className="mb-2">Financial Instruments traded on foreign markets may involve risks that differ from, and in some cases exceed, those typically associated with the domestic markets of the Client’s country of residence. In particular, exchange rate volatility can significantly affect the potential for profit or loss when trading in international markets.</li>
        <li className="mb-2">Derivative financial instruments—such as options, futures, forwards, swaps, and contracts for difference (CFDs)—are typically non-deliverable spot transactions that allow investors to speculate on movements in currency exchange rates, commodities, indices, or other market variables. The value of a derivative is often directly influenced by the price of the underlying asset it references.</li>
        <li className="mb-2">Clients should not engage in derivative trading unless they fully understand the nature of the instruments and are prepared to accept the risk of losing the entire investment, as well as any associated costs, such as commissions and other transaction-related expenses.</li>
        <li className="mb-2">In the event of a Force Majeure—defined as unforeseen circumstances beyond the Company’s control—the Company may be unable to execute Client orders or fulfill its contractual obligations as outlined in the Terms and Conditions. Such events may result in financial loss to the Client, for which the Company shall not be held liable.</li>
        <li className="mb-2">The Company disclaims any liability for loss or damage resulting from delays, interruptions, or failures in fulfilling its obligations caused by Force Majeure events.</li>
        <li className="mb-2">The Client acknowledges and agrees that additional risks not specifically outlined in this notice may also exist and should be carefully considered when engaging in financial trading.</li>
      </ul>

      <h3 className="h3 fw-semibold mt-5 mb-3 text-dark">Volatility of price and limitation on the available market</h3>
      <p className="mb-4 lh-base text-secondary">
        The prices of Forex, CFDs, or any other derivative product may fluctuate rapidly and over wide ranges, none of which can be controlled by the Client or the Company. It is important for the Client to understand that his profitability might be affected by these changes in conditions.
      </p>
      <p className="mb-4 lh-base text-secondary">
        Under specific market conditions (illiquidity, economic announcement, political events, at times of rapid price movement, if the price rises or falls in one trading session to such an extent that under the rules of the relevant exchange trading is suspended or restricted, etc) it can be impossible to execute any type of Clients order at declared price. Under these conditions the prices of Forex, CFDs, or any other derivative product may not maintain their customary or anticipated relationships to the prices of the underlying asset.
      </p>
      <p className="mb-4 lh-base text-secondary">
        Therefore, placing contingent orders, such as “stop-loss” or “stop-limit” orders, may not necessarily limit your losses to the intended amounts, since market conditions, which can become extraordinarily volatile, may make it impossible to execute such orders. The Client should also be aware of gaps and windows into the price of an instrument that occur sometimes at the opening or closing of the market where the underlying instrument is traded, affecting Client’s profitability.
      </p>
      <p className="mb-4 lh-base text-secondary">
        All Forex, CFDs, or any other derivative product involves risk, and there is no trading strategy that can eliminate it. Strategies using combinations of positions, such as spreads and “straddle” positions may be as risky as taking simple long or short positions. Trading in Forex, CFDs, Forex or any other derivative product requires knowledge of all relevant markets and available types of orders.
      </p>
      <p className="mb-4 lh-base text-secondary">
        The prices of Forex, CFDs, or any other derivative product will be influenced by, amongst other things, changing supply and demand relationships, governmental, agricultural, commercial and trade programs and policies, national and international political and economic events and the prevailing psychological characteristics of the relevant marketplace.
      </p>

      <h3 className="h3 fw-semibold mt-5 mb-3 text-dark">Margin Call</h3>
      <p className="mb-4 lh-base text-secondary">
        To open a position, Clients are required to deposit initial margin with the Company. The required margin amount will vary depending on several factors, including the underlying asset of the Forex, CFD, or other financial derivative product, the level of leverage selected, and the total value of the position being established.
      </p>
      <p className="mb-4 lh-base text-secondary">
        It is the Client’s sole responsibility to ensure that their trading account maintains sufficient margin at all times to support any open positions. Clients must actively monitor their margin levels and open positions to prevent automatic liquidation due to insufficient funds.
      </p>
      <p className="mb-4 lh-base text-secondary">
        The Company does not undertake any obligation to issue Margin Calls in the event of a loss-making position. While the Company may, at its discretion, issue such calls, it is not required to do so. Therefore, Clients must independently track their margin status and ensure compliance with the margin requirements.
      </p>
      <p className="mb-4 lh-base text-secondary">
        Due to prevailing market conditions, there may be circumstances in which the Client is unable to sell or close a position in Forex, CFDs, or other financial derivatives—even if such instruments are normally available on the Company’s trading platform. This may occur in situations such as limited market liquidity, trading halts, or other disruptions that affect the availability or pricing of the underlying asset.
      </p>

      <h3 className="h3 fw-semibold mt-5 mb-3 text-dark">Communication Risks</h3>
      <p className="mb-4 lh-base text-secondary">
        The Company shall not be held liable for any losses incurred due to delayed, unread, or undelivered communications sent to the Client.
      </p>
      <p className="mb-4 lh-base text-secondary">
        The Company accepts no responsibility for any loss resulting from unauthorized access to unencrypted communications transmitted to the Client.
      </p>
      <p className="mb-4 lh-base text-secondary">
        The Company is not liable for any unread or undelivered messages sent through the trading platform or to the Client’s registered email address. If the Client raises no objection within seven (7) calendar days from the date the message was sent, it shall be deemed that the message was received, read, and understood.
      </p>
      <p className="mb-4 lh-base text-secondary">
        The Client is solely responsible for maintaining the confidentiality and security of any information contained in communications received from the Company.
      </p>

      <h3 className="h3 fw-semibold mt-5 mb-3 text-dark">General Investment Risks</h3>
      <p className="mb-4 lh-base text-secondary">
        The classification of risks is based on general as well as on product-specific risks. We mentioned above the product-specific risks for Forex, CFDs or any other financial derivative product. The general risks which should also be taken into account are described briefly below. Please note that some of the below risks may or may not be applicable in Forex, CFDs or any other financial derivative product.
      </p>

      <h3 className="h3 fw-semibold mt-5 mb-3 text-dark">Bonus Policy.</h3>
      <p className="mb-4 lh-base text-secondary">
        1) Welcome Bonus.
        To welcome our clients and to support enhancing their equity to have sufficient margin to sustain in market and to utilize the same for entering into multiple positions the company is awarding welcome bonus.
        The welcome bonus, however is not withdrawable untill and unless the client reached the required trading volume.
        Further, In case of removing or transferring any amount from trading account the bonus and any profit made by or with the help of using such bonus will be removed automatically.
      </p>
      <p className="mb-4 lh-base text-secondary">
        2) Referral Bonus.
        For any successful referal the existing client will get 40% of the initial deposit as Bonus.
        In addition to bonus policy stated and restrictions stated in welcome bonus the existing client will be entitle to claim the referal bonus as soon as the new client have completed trading of 5 standard lots in commodities.
      </p>
      <p className="mb-4 lh-base text-secondary">
        The receiving of bonus in trading account by the client considered acceptance of bonus policy and terms and conditions related thereof.
      </p>
    </div>
  );
};

export default App;

const GivingAmountInput = () => {
    return (
      <section
        className='imod-giveBtns-2 sectionRow'
        data-sectionname='giveBtns-2'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-xs-12 sectionHeader'
              id='ContentMiddleLayoutGiveBtns2Hdr'
              runat='server'>
              <h2>Give Amount Input Field</h2>
            </div>
          </div>
          <div className='row'>
            <div
              className='col-xs-12 sectionContent'
              id='ContentMiddleLayoutGiveBtns2'
              runat='server'>
              <p style={{textAlign:'center'}}>
                This field allows users to start the giving process right on the
                homepage with a custom amount of their choosing.
              </p>
              <div className='giveInputWrapper'>
                <div className='giveInputInner'>
                  <label htmlFor='giveInput' className='sr-only'>
                    Enter Gift Amount
                  </label>
                  <div className='dollarSign'>
                    <span className='fa fa-usd' aria-hidden='true'></span>
                  </div>
                  <input id='giveInput' placeholder='Enter your gift amount' />
                </div>
                <a id='giveBtnSubmit' href='#'>
                  Give Now
                </a>
                <div id='errorMsg'></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
 
export default GivingAmountInput;
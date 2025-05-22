const GivingAmountButtons = () => {
    return (
      <section
        className='imod-giveBtns-1 sectionRow'
        data-sectionname='giveBtns-1'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-xs-12 sectionHeader'
              id='ContentMiddleLayoutGiveBtns1Hdr'
              runat='server'>
              <h2>Give Amount Buttons</h2>
            </div>
          </div>
          <div className='row'>
            <div
              className='col-xs-12 sectionContent'
              id='ContentMiddleLayoutGiveBtns1'
              runat='server'>
              <p style={{textAlign:'center'}}>
                These buttons will take the user to the form and use the
                "&amount=" URL addition to prepopulate the gift value.
              </p>
              <ul className='giveBtnsList'>
                <li>
                  <a href='#&amount=50'>
                    <span className='sm'>$</span>50
                  </a>
                </li>
                <li>
                  <a href='#&amount=100'>
                    <span className='sm'>$</span>100
                  </a>
                </li>
                <li>
                  <a href='#&amount=250'>
                    <span className='sm'>$</span>250
                  </a>
                </li>
                <li>
                  <a href='#&amount=500'>
                    <span className='sm'>$</span>500
                  </a>
                </li>
                <li>
                  <a href='#&amount=1000'>
                    <span className='sm'>$</span>1000
                  </a>
                </li>
                <li>
                  <a href='#' className='otherAmt'>
                    Other
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
}
 
export default GivingAmountButtons;
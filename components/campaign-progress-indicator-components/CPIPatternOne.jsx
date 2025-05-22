const CPIPatternOne = () => {
    return (
      <section className='imod-cpi-1 sectionRow' data-sectionname='cpi-1'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-xs-12 sectionHeader emptyCheck'
              id='ContentMiddleLayoutCPI1Hdr'
              runat='server'>
              <h2>Campaign Progress Indicator #1</h2>
            </div>
          </div>
          <div className='row'>
            <div
              className='col-xs-12 sectionContent emptyCheck'
              id='ContentMiddleLayoutCPI1'
              runat='server'>
              <div className='imod-progWidget'>
                <div className='title'>Module Header</div>
                <div className='data-viz'>
                  <div className='vizWrapper'>
                    <div className='bar'>
                      <div className='value'>20%</div>
                      <div style={{width:'20%'}} className='progressBar'></div>
                    </div>
                  </div>
                </div>
                <div className='preview'>
                  This text is generated as part of the module. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse.
                </div>
                <div className='giveBtn'>
                  <a className='expand' href='#'>
                    Give Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
 
export default CPIPatternOne;
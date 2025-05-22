const CPIPatternTwo = () => {
  return (
    <section className='imod-cpi-2 sectionRow' data-sectionname='cpi-2'>
      <div className='container'>
        <div className='row'>
          <div
            className='col-xs-12 sectionHeader emptyCheck'
            id='ContentMiddleLayoutCPI2Hdr'
            runat='server'>
            <h2>Campaign Progress Indicator Section #2</h2>
          </div>
        </div>
        <div className='row'>
          <div
            className='col-xs-12 sectionContent emptyCheck'
            id='ContentMiddleLayoutCPI2'
            runat='server'>
            <div className='imod-progWidget'>
              <div className='data-viz col-xs-12 col-sm-4 col-sm-push-8 col-md-4 col-md-push-8'>
                <div className='vizWrapper'>
                  <div className='bar'>
                    <div className='value'>62%</div>
                    <div style={{height:'62%'}} className='progressBar'></div>
                  </div>
                </div>
              </div>
              <div className='text col-xs-12 col-sm-8 col-sm-pull-4 col-md-pull-4 col-md-8'>
                <div className='title'>
                  <a href='#'>Lorem Ipsum Title Three</a>
                </div>
                <div className='preview'>
                  The arts are an integral part of the Union experience,
                  offering students music ensembles, orchestra, chorales,
                  theater, dance, painting, photography, digital arts, ceramics,
                  printmaking, just to name a few.
                </div>
                <div className='giveBtn'>
                  <a href='#'>GIVE NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CPIPatternTwo;

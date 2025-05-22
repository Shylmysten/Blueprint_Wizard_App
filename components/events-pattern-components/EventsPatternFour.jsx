import Image from "next/image";

const EventsPatternFour = () => {
    return (
      <section className='imod-events-4 sectionRow' data-sectionname='events-4'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-xs-12 sectionHeader emptyCheck'
              id='ContentMiddleLayoutEvents4Hdr'
              runat='server'>
              <h2>Events Pattern #4</h2>
            </div>
          </div>
          <div className='row'>
            <div
              className='col-xs-12 sectionContent emptyCheck'
              id='ContentMiddleLayoutEvents4'
              runat='server'>
              <div className='eventsWrapper'>
                <div className='eventsRow clearfix'>
                  <div className='col-sm-12 col-md-6 eventsItem horiz'>
                    <div className='eventInner'>
                      <div
                        className='thumb'
                        style={{backgroundImage:'url(/home-cpi3.jpg)'}}>
                        <Image
                          src='/home-cpi3.jpg'
                          alt='Two students dancing ballet'
                          width={700}
                          height={400}
                          style={{width: '100%'}}
                        />
                      </div>
                      <div className='text eh-eventItem'>
                        <div className='date'>
                          <span className='month'>Sep</span>
                          <span className='day'>23</span>
                        </div>
                        <div className='title eh-eventTitle'>
                          <a href='#'>
                            Lorem ipsum consectetur adipiscing elit
                          </a>
                        </div>
                        <div className='preview eh-eventPreview'>
                          Quisque in enim non leo laoreet luctus. Nunc volutpat
                          purus ante, ut laoreet est vehicula ac. Phasellus
                          congue libero eu diam pellentesque.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-6 eventsItem horiz'>
                    <div className='eventInner'>
                      <div
                        className='thumb'
                        style={{backgroundImage:'url(/home-cpi7.jpg)'}}>
                        <img
                          src='/home-cpi7.jpg'
                          alt='Class in session in a lecture hall'
                          width={700}
                          height={450}
                          style={{width: '100%'}}
                        />
                      </div>
                      <div className='text eh-eventItem'>
                        <div className='date'>
                          <span className='month'>Sep</span>
                          <span className='day'>24</span>
                        </div>
                        <div className='title eh-eventTitle'>
                          <a href='#'>Lorem ipsum dolor sit amet</a>
                        </div>
                        <div className='preview eh-eventPreview'>
                          Nunc volutpat purus ante, ut laoreet est vehicula ac.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div
              className='col-xs-12 sectionBtn emptyCheck'
              id='ContentMiddleLayoutEvents4Btn'
              runat='server'>
              <div className='viewAll'>
                <a href='#'>
                  <span>View All Events</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
 
export default EventsPatternFour;
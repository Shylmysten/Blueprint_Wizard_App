import Image from "next/image";

const EventsPatternOne = () => {
    return (
      <section className='imod-events-1 sectionRow' data-sectionname='events-1'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-xs-12 sectionHeader emptyCheck'
              id='ContentMiddleLayoutEvents1Hdr'
              runat='server'>
              <h2>Events Pattern #1</h2>
            </div>
          </div>
          <div className='row'>
            <div
              className='col-xs-12 sectionContent emptyCheck'
              id='ContentMiddleLayoutEvents1'
              runat='server'>
              <div className='eventsWrapper'>
                <div className='eventsRow clearfix'>
                  <div className='col-xs-12 col-sm-12 col-md-4 eventsItem stacked textBelow'>
                    <div className='eventsInner'>
                      <div
                        className='thumb'
                        style={{backgroundImage:'url(/home-cpi12.jpg)'}}>
                        <a href='#'>
                          <Image
                            src='/home-cpi12.jpg'
                            alt='Three students sitting on the lawn'
                            width={700}
                            height={450}
                            style={{width: '100%'}}
                          />
                        </a>
                        <div className='date'>
                          <span className='month'>Sep</span>
                          <span className='day'>23</span>
                        </div>
                      </div>
                      <div className='text'>
                        <div className='title'>
                          <a href='#'>Lunch on the Quad</a>
                        </div>
                        <div className='preview'>
                          Quisque in enim non leo laoreet luctus. Mauris rhoncus
                          tortor non feugiat lobortis. Nunc volutpat purus ante,
                          ut laoreet est vehicula ac.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xs-12 col-sm-12 col-md-4 eventsItem stacked'>
                    <div className='eventsInner'>
                      <div
                        className='thumb'
                        style={{backgroundImage:'url(/home-cpi10.jpg)'}}>
                        <a href='#'>
                          <Image
                            src='/home-cpi10.jpg'
                            alt='Students cheering at the audience'
                            width={700}
                            height={450}
                            style={{width: '100%'}}
                          />
                        </a>
                        <div className='date'>
                          <span className='month'>Sep</span>
                          <span className='day'>24</span>
                        </div>
                      </div>
                      <div className='text'>
                        <div className='title'>
                          <a href='#'>Homecoming Pep Rally</a>
                        </div>
                        <div className='preview'>
                          Quisque in enim non leo laoreet luctus. Mauris rhoncus
                          tortor non feugiat lobortis. Nunc volutpat purus ante,
                          ut laoreet est vehicula ac.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xs-12 col-sm-12 col-md-4 eventsItem stacked'>
                    <div className='eventsInner'>
                      <div
                        className='thumb'
                        style={{backgroundImage:'url(/home-cpi9.jpg)'}}>
                        <a href='#'>
                          <Image
                            src='/home-cpi9.jpg'
                            alt='Male student playing flag football'
                            width={700}
                            height={450}
                            style={{width: '100%'}}
                          />
                        </a>
                        <div className='date'>
                          <span className='month'>Sep</span>
                          <span className='day'>25</span>
                        </div>
                      </div>
                      <div className='text'>
                        <div className='title'>
                          <a href='#'>Intramural Flag Football Festival</a>
                        </div>
                        <div className='preview'>
                          Quisque in enim non leo laoreet luctus. Mauris rhoncus
                          tortor non feugiat lobortis. Nunc volutpat purus ante,
                          ut laoreet est vehicula ac.
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
              id='ContentMiddleLayoutEvents1Btn'
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
 
export default EventsPatternOne;
import Image from "next/image";

const NewsPatternTwo = () => {
    return ( 
        <section className='imod-news-2 sectionRow' data-sectionname='news-2'>
        <div className='sectionBkgdWrap'>
          <div
            className='fullImg sectionBkgd'
            id='ContentMiddleLayoutImgNews2'
            runat='server'>
            <div className='snippetrow'></div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div
              className='col-xs-12 sectionHeader emptyCheck'
              id='ContentMiddleLayoutNews2Hdr'
              runat='server'>
              <h2>News Pattern #2</h2>
            </div>
          </div>
          <div className='row'>
            <div
              className='col-xs-12 sectionContent emptyCheck'
              id='ContentMiddleLayoutNews2'
              runat='server'>
              <div className='newsWrapper'>
                <div className='newsRow clearfix'>
                  <div className='col-xs-12 col-sm-12 col-md-6 newsItem horiz small'>
                    <div className='newsInner'>
                      <div className='tools'></div>
                      <a href='#'>
                        <div
                          className='thumb'
                          style={{backgroundImage:'url(/home-news1-400x300.jpg)'}}>
                          <Image
                            src='/home-news1-400x300.jpg'
                            alt='Man in glasses'
                            width={400}
                            height={300}
                            style={{width: '100%'}}
                          />
                        </div>
                        <div className='text'>
                          <div className='title'>
                            Lorem ipsum consectetur adipiscing elit
                          </div>
                          <div className='preview'>
                            Quisque in enim non leo laoreet luctus. Nunc
                            volutpat purus ante, ut laoreet est vehicula ac.
                            Phasellus congue libero eu diam pellentesque
                            consectetur.
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='col-xs-12 col-sm-12 col-md-6 newsItem horiz small'>
                    <div className='newsInner'>
                      <div className='tools'></div>
                      <a href='#'>
                        <div
                          className='thumb'
                          style={{backgroundImage:'url(/home-news2-400x300.jpg)'}}>
                          <img
                            src='/home-news2-400x300.jpg'
                            alt='Colored dust in air'
                            width={400}
                            height={300}
                            style={{width: '100%'}}
                          />
                        </div>
                        <div className='text'>
                          <div className='title'>Lorem ipsum dolor sit amet</div>
                          <div className='preview'>
                            Nunc volutpat purus ante, ut laoreet est vehicula
                            ac. Phasellus congue libero eu diam pellentesque
                            consectetur. Quisque in enim non leo laoreet luctus.
                            Nunc volutpat purus ante, ut laoreet est vehicula
                            ac.
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='newsRow clearfix'>
                  <div className='col-xs-12 col-sm-12 col-md-6 newsItem horiz small'>
                    <div className='newsInner'>
                      <div className='tools'></div>
                      <div
                        className='thumb'
                        style={{backgroundImage:'url(/home-news3-400x300.jpg)'}}>
                        <img
                            src='/home-news3-400x300.jpg'
                             alt='Library shelves and desks'
                            width={400}
                            height={300}
                            style={{width: '100%'}}
                        />
                      </div>
                      <div className='text'>
                        <div className='title'>
                          Lorem ipsum consectetur adipiscing elit
                        </div>
                        <div className='preview'>
                          Quisque in enim non leo laoreet luctus. Nunc volutpat
                          purus ante, ut laoreet est vehicula ac. Phasellus
                          congue libero eu diam pellentesque consectetur.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xs-12 col-sm-12 col-md-6 newsItem horiz small'>
                    <div className='newsInner'>
                      <div className='tools'></div>
                      <a href='#'>
                        <div
                          className='thumb'
                          style={{backgroundImage:'url(/home-news4-400x300.jpg)'}}>
                          <img
                            src='/home-news4-400x300.jpg'
                            alt='African american woman'
                            width={400}
                            height={300}
                            style={{width: '100%'}}
                          />
                        </div>
                        <div className='text'>
                          <div className='title'>Lorem ipsum dolor sit amet</div>
                          <div className='preview'>
                            Nunc volutpat purus ante, ut laoreet est vehicula
                            ac. Phasellus congue libero eu diam pellentesque
                            consectetur.
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div
              className='col-xs-12 sectionBtn emptyCheck'
              id='ContentMiddleLayoutNews2Btn'
              runat='server'>
              <div className='viewAll'>
                <a href='#'>
                  <span>View All News</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default NewsPatternTwo;
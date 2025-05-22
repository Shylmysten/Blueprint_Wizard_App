import Image from "next/image";

const NewsPatternThree = () => {
    return (
      <section className='imod-news-3 sectionRow' data-sectionname='news-3'>
        <div className='sectionBkgdWrap'>
          <div
            className='fullImg sectionBkgd'
            id='ContentMiddleLayoutImgNews3'
            runat='server'>
            <div className='snippetrow'></div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div
              className='col-xs-12 sectionHeader emptyCheck'
              id='ContentMiddleLayoutNews3Hdr'
              runat='server'>
              <h2>News Pattern #3</h2>
            </div>
          </div>
          <div className='row'>
            <div
              className='col-xs-12 sectionContent emptyCheck'
              id='ContentMiddleLayoutNews3'
              runat='server'>
              <div className='newsWrapper'>
                <div className='newsRow clearfix'>
                  <div className='col-xs-12 col-sm-6 col-md-3 newsItem stacked'>
                    <div className='newsInner'>
                      <div className='tools'></div>
                      <a href='#'>
                        <div
                          className='thumb'
                          style={{backgroundImage:'url(/home-news1-400x300.jpg)'}}>
                          <Image
                            src='/home-news1-400x300.jpg'
                            alt='Young man in fall'
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
                  <div className='col-xs-12 col-sm-6 col-md-3 newsItem stacked'>
                    <div className='newsInner'>
                      <div className='tools'></div>
                      <div
                        className='thumb'
                        style={{backgroundImage:'url(/home-news2-400x300.jpg)'}}>
                        <Image
                            src='/home-news2-400x300.jpg'
                            alt=''
                            width={400}
                            height={300}
                            style={{width: '100%'}}
                        />
                      </div>
                      <div className='text'>
                        <div className='title'>Lorem ipsum dolor sit amet</div>
                        <div className='preview'>
                          Nunc volutpat purus ante, ut laoreet est vehicula ac.
                          Phasellus congue libero eu diam pellentesque
                          consectetur. Quisque in enim non leo laoreet luctus.
                          Nunc volutpat purus ante, ut laoreet est vehicula ac.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xs-12 col-sm-6 col-md-3 newsItem stacked'>
                    <div className='newsInner'>
                      <div className='tools'></div>
                      <a href='#'>
                        <div
                          className='thumb'
                          style={{backgroundImage:'url(/home-news3-400x300.jpg)'}}>
                          <Image
                            src='/home-news3-400x300.jpg'
                            alt=''
                            width={400}
                            height={300}
                            style={{width: '100%'}}
                          />
                        </div>
                        <div className='text'>
                          <div className='title'>Lorem ipsum dolor sit amet</div>
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
                  <div className='col-xs-12 col-sm-6 col-md-3 newsItem stacked'>
                    <div className='newsInner'>
                      <div className='tools'></div>
                      <a href='#'>
                        <div
                          className='thumb'
                          style={{backgroundImage:'url(/home-news4-400x300.jpg)'}}>
                          <Image
                            src='/home-news4-400x300.jpg'
                            alt=''
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
              id='ContentMiddleLayoutNews3Btn'
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
 
export default NewsPatternThree;
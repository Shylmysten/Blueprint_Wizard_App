import Image from "next/image";

const NewsPatternOne = () => {
    return (
      <section className='imod-news-1 sectionRow' data-sectionname='news-1'>
        <div className='sectionBkgdWrap'>
          <div
            className='fullImg sectionBkgd'
            id='ContentMiddleLayoutImgNews1'
            runat='server'>
            <div className='snippetrow'></div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div
              className='col-xs-12 sectionHeader emptyCheck'
              id='ContentMiddleLayoutNews1Hdr'
              runat='server'>
              <h2>News Pattern #1</h2>
            </div>
          </div>
          <div className='row'>
            <div
              className='col-xs-12 sectionContent emptyCheck'
              id='ContentMiddleLayoutNews1'
              runat='server'>
              <div className='newsWrapper'>
                <div className='newsRow clearfix'>
                  <div className='col-xs-12 col-sm-12 col-md-4 newsItem stacked'>
                    <div className='newsInner'>
                      <div className='tools'></div>
                      <a href='#'>
                        <div
                          className='thumb'
                          style={{backgroundImage:'url(/home-news1-400x300.jpg)'}}>
                          <Image
                            src='/home-news1-400x300.jpg'
                            alt=''
                            width={400}
                            height={300}
                            style={{width: '100%'}}
                          />
                        </div>
                        <div className='text'>
                          <div className='title'>How To Give</div>
                          <div className='preview'>
                            Quisque in enim non leo laoreet luctus. Mauris
                            rhoncus tortor non feugiat lobortis. Nunc volutpat
                            purus ante, ut laoreet est vehicula ac.
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='col-xs-12 col-sm-12 col-md-4 newsItem stacked'>
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
                        <div className='title'>Ways to Give</div>
                        <div className='preview'>
                          Quisque in enim non leo laoreet luctus. Mauris rhoncus
                          tortor non feugiat lobortis. Nunc volutpat purus ante,
                          ut laoreet est vehicula ac. Quisque in enim non leo
                          laoreet luctus. Mauris rhoncus tortor non feugiat
                          lobortis.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xs-12 col-sm-12 col-md-4 newsItem stacked'>
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
                          <div className='title'>Why Giving Helps</div>
                          <div className='preview'>
                            Quisque in enim non leo laoreet luctus. Mauris
                            rhoncus tortor non feugiat lobortis. Nunc volutpat
                            purus ante, ut laoreet est vehicula ac.
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
              id='ContentMiddleLayoutNews1Btn'
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
 
export default NewsPatternOne;
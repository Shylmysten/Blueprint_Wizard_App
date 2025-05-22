import Image from "next/image";

const TextPatternThree = () => {
    return (
      <section className='imod-text-3 sectionRow' data-sectionname='text-3'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-xs-12 sectionContent emptyCheck'
              id='ContentMiddleLayoutInfo3'
              runat='server'>
              <link
                href='//design.redesign-imodules.com//s/resources/css/imodbase.css'
                rel='stylesheet'
              />
              <div className='snippetrow'>
                <div>
                  <h2>Text Layout Section #3</h2>
                </div>
              </div>
              <div className='snippetrow'>
                <div className='split50left'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque ultricies felis ut libero rhoncus, ac tristique
                    felis mattis. Pellentesque vel magna in diam dictum
                    convallis eu eu tellus. Fusce fermentum libero non est
                    finibus rhoncus.
                  </p>
                  <p>
                    Ut tempus nisl vel tempor tristique. Maecenas leo nisl,
                    accumsan vel hendrerit ut, malesuada consectetur risus. Nam
                    commodo commodo dictum.
                  </p>
                  <a href='#' className='button'>
                    Example Button
                  </a>
                </div>
                <div className='split50right'>
                  <Image
                    src='/interior-rect3.jpg'
                    alt=''
                    width={800}
                    height={500}
                    style={{width: '100%'}}
                  />
                </div>
              </div>
              <div className='snippetrow'>
                <div className='split33left'>
                  <div className='iconItem'>
                    <a href='#'>
                      <div className='icon'>
                        <span
                          className='fa fa-university'
                          aria-hidden='true'></span>
                      </div>
                      <div className='text'>
                        <h3>Test Header</h3>
                        <p>
                          Quisque in enim non leo laoreet luctus. Mauris rhoncus
                          tortor non feugiat lobortis. Nunc volutpat purus ante.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className='split33middle'>
                  <div className='iconItem'>
                    <div className='icon'>
                      <span className='fa fa-bicycle' aria-hidden='true'></span>
                    </div>
                    <div className='text'>
                      <p>
                        <strong>This one has no link.</strong>Quisque in enim
                        non leo laoreet luctus. Mauris rhoncus tortor non
                        feugiat lobortis. Nunc volutpat purus ante. Mauris
                        rhoncus tortor non feugiat lobortis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='split33right'>
                  <div className='iconItem'>
                    <a href='#'>
                      <div className='icon'>
                        <span className='fa fa-star' aria-hidden='true'></span>
                      </div>
                      <div className='text'>
                        <p>
                          Quisque in enim non leo laoreet luctus. Mauris rhoncus
                          tortor non feugiat lobortis. Nunc volutpat purus ante.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
 
export default TextPatternThree;
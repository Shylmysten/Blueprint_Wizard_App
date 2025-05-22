import Image from "next/image";

const TextPatternFour = () => {
    return (
      <section className='imod-social-1 sectionRow' data-sectionname='text-4'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-xs-12 sectionHeader emptyCheck'
              id='ContentMiddleLayoutSocial1Hdr'
              runat='server'>
              <h2>Text Section #4/Social Embeds</h2>
            </div>
          </div>
          <div className='row equal-height'>
            <div className='col-xs-12 col-sm-4 sectionContent equal-height-item'>
              <div className='newsItem equal-height-item-inner'>
                <div className='text'>
                  <div
                    className='title emptyCheck'
                    id='ContentMiddleLayoutSocSubHdr1'
                    runat='server'>
                    <h3>Column 1 Header</h3>
                  </div>
                  <div
                    className='widget emptyCheck'
                    id='ContentMiddleLayoutSocial1'
                    runat='server'>
                    <Image
                      src='/home-cpi10.jpg'
                      alt=''
                      width={700}
                      height={450}
                      style={{width: '100%'}}
                    />
                    <p>
                      Maybe there was an old trapper that lived out here and
                      maybe one day he went to check his beaver traps, and maybe
                      he fell into the river and drowned. We want to use a lot
                      pressure while using no pressure at all. We'll throw some
                      happy little limbs on this tree. Just beat the devil out
                      of it. If you hypnotize it, it will go away.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xs-12 col-sm-4 sectionContent equal-height-item'>
              <div className='newsItem equal-height-item-inner'>
                <div className='text'>
                  <div
                    className='title emptyCheck'
                    id='ContentMiddleLayoutSocSubHdr2'
                    runat='server'>
                    <h3>Column 2 Header</h3>
                  </div>
                  <div
                    className='widget emptyCheck'
                    id='ContentMiddleLayoutSocial2'
                    runat='server'>
                    <Image
                      src='/home-cpi5.jpg'
                      alt=''
                      width={700}
                      height={450}
                      style={{width: '100%'}}
                    />
                    <p>
                      It's cold, but it's beautiful. It's beautiful - and we
                      haven't even done anything to it yet. We'll put a happy
                      little sky in here. The least little bit can do so much.
                      Zip. That easy.
                    </p>
                    <a href='#' className='button'>
                      Example
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xs-12 col-sm-4 sectionContent equal-height-item'>
              <div className='newsItem equal-height-item-inner'>
                <div className='text'>
                  <div
                    className='title emptyCheck'
                    id='ContentMiddleLayoutSocSubHdr3'
                    runat='server'>
                    <h3>Column 3 Header</h3>
                  </div>
                  <div
                    className='widget emptyCheck'
                    id='ContentMiddleLayoutSocial3'
                    runat='server'>
                    <Image
                      src='/home-cpi8.jpg'
                      alt=''
                      width={700}
                      height={450}
                      style={{width: '100%'}}
                    />
                    <p>
                      Paint anything you want on the canvas. Create your own
                      world. From all of us here, I want to wish you happy
                      painting and God bless, my friends. Remember how free
                      clouds are. They just lay around in the sky all day long.
                      Happy painting, God bless. Let your heart take you to
                      wherever you want to be. Let all these things just sort of
                      happen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
 
export default TextPatternFour;
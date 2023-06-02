import './style.css'
import { TopLabel } from '../../topLabel'
import { HomeLabel } from '../../homeLabel'
import { LabelLabel } from '../../labelLabel'
import { BlueCheckmark, CloseIcon } from '../../svg'

export const SellGoodsFaster = ({ open, setOpen, onClickHomeBtn, onClickTopBtn, onClickLabelBtn, selectedLabel, setSelectedLabel }) => {
    return (
        <div className={open ? 'active' : 'inactive'}>
            <div className='pop' style={{ width: '570px' }}>
                <div className='close' onClick={() => {
                    setOpen(null)
                    setSelectedLabel(null)
                }} >
                    <CloseIcon />
                </div>
                <h1>Продайте свой товар быстрее</h1>
                <span id='sellSpan'>Вы можете продвегать свое объявление данными способами</span>
                <div className='loginSeparator' />
                <div className='popupScroller'>
                    <div className='toopLabels'>
                        <div className='eachLabel' onClick={() => setSelectedLabel(1)} style={{ border: selectedLabel === 1 && '2px solid #7791F7' }}>
                            <img alt='' src={require('../../../public/blueHomeIcon.png')} />
                            <div className='eachLabelRight'>
                                <div className='eachLabelTop'>
                                    <p>На главную страницу</p>
                                    <span>1200 р</span>
                                </div>
                                <p>Объявление будет размещено на главной странице List.am в ротации с другими объявлениями.</p>
                            </div>
                            <div className='blueCheckmark' style={selectedLabel === 1 ? { display: 'flex' } : { display: 'none' }}>
                                <BlueCheckmark />
                            </div>
                        </div>
                        <div className='eachLabel' onClick={() => setSelectedLabel(2)} style={{ border: selectedLabel === 2 && '2px solid #7791F7' }}>
                            <img alt='' src={require('../../../public/blueTopIcon.png')} />
                            <div className='eachLabelRight'>
                                <div className='eachLabelTop'>
                                    <p>Разместить в Топ</p>
                                    <span>1200 р</span>
                                </div>
                                <p>Объявление будет помещено в блок "Топ объявления" наверху всех страниц рубрики.</p>
                            </div>
                            <div className='blueCheckmark' style={selectedLabel === 2 ? { display: 'flex' } : { display: 'none' }}>
                                <BlueCheckmark />
                            </div>
                        </div>
                        <div className='eachLabel' onClick={() => setSelectedLabel(3)} style={{ border: selectedLabel === 3 && '2px solid #7791F7' }}>
                            <img alt='' src={require('../../../public/blueTagIcon.png')} />
                            <div className='eachLabelRight'>
                                <div className='eachLabelTop'>
                                    <p>Добавить метку</p>
                                    <span>1200 р</span>
                                </div>
                                <p>В объявление будет добавлена яркая метка, видная на странице объявления, в списке объявлений и в результатах поиска.</p>
                            </div>
                            <div className='blueCheckmark' style={selectedLabel === 3 ? { display: 'flex' } : { display: 'none' }}>
                                <BlueCheckmark />
                            </div>
                        </div>
                    </div>
                    <div className='selectedLabels'>
                        {selectedLabel === 1 && <HomeLabel onClick={onClickHomeBtn} />}
                        {selectedLabel === 2 && <TopLabel onClick={onClickTopBtn} />}
                        {selectedLabel === 3 && <LabelLabel onClick={onClickLabelBtn} />}
                    </div>
                </div>
            </div>
        </div>
    )
}
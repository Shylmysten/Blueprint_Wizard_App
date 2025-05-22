const LoadingSpinner = () => {
    return ( 
        <div style={{width: "100vw", height: '100vh', position: 'fixed', zIndex: '1000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#000000', color: '#ffffff'}}>
          <div>Loading...</div><br/>
          <i className="fas fa-gear fa-fw fa-6x fa-spin"></i>
        </div> 
     );
}
 
export default LoadingSpinner;
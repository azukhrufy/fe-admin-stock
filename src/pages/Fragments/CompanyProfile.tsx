const CompanyProfile = (props: any) => {
    return(
        <div className="text-justify text-brand-black text-sm" style={props.active === 4 ? { display: 'block'} : {display: 'none'}}>
            PT Telkom Indonesia (Persero) Tbk didirikan pada 6 Juli 1965, berdasarkan keputusan manajemen pada tahun 2016 dan melantai di bursa saham pada 14 November 1995. PT Telkom Indonesia (Persero) Tbk memiliki visi untuk menjadi digital telco pilihan utama untuk memajukan masyarakat.
        </div>
    );
}

export default CompanyProfile;
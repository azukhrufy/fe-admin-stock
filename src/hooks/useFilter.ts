export function useFilter(event?: React.SyntheticEvent){
    function filter(key : number,  setActiveFilter: (data: any) => void){
        setActiveFilter(key);
    }

    return {
        filter
    }
}
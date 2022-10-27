export function reFormat(num){
    return ('' + num).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
}
export default function formattedDate(dateString:string){
    return new Date(dateString).toLocaleDateString("pt-BR", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}
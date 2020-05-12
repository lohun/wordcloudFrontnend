import HTMLToCanvas from 'html2canvas'

export const download = (props) => {
    const node = document.querySelector('.wordcloud_image')
    HTMLToCanvas(node)
    .then(async e=>{
        const url = e.toDataURL(`image/${props}`)
        const download = document.createElement('a')
        download.href = url
        download.download = `image.${props}`
        await document.body.appendChild(download)
        download.click()
        document.body.removeChild(download)
    })
}
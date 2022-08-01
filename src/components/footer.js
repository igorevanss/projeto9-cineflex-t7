export default function Footer({footerInfo}) {

  return (
    <div className="footer">
      <div>
        <img src={footerInfo.posterURL} />
      </div>
      <p>
      {footerInfo.title}
      </p>
    </div>
  )
}
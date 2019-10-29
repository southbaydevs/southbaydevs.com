export default function Footer() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '1rem'
      }}
    >
      <a
        href="mailto:hello@southbaydevs.com"
        ref="nofollow noreferer"
        target="_blank"
      >
        hello@southbaydevs.com
      </a>
    </div>
  )
}

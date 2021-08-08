function Error({ statusCode }) {
    return (
      <p>
        {statusCode
          ? `에러가 발생했습니다. neostgeart@gmail.com 으로 문의주세요.`
          : '에러가 발생했습니다. 잠시 후 다시 시도해주세요.'}
      </p>
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error
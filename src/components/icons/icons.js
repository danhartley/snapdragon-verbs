import glamorous from 'glamorous';

const onAttention = '&:hover, &:focus';

const ControllerButton = glamorous.button({
    backgroundColor: 'transparent',
    border: 'none',
    position: 'absolute',
    right: 8,
    top: 12,
    cursor: 'pointer',
  })
  
  function ArrowIcon({isOpen}) {
    return (
      <svg
        viewBox="0 0 20 20"
        preserveAspectRatio="none"
        width={16}
        fill="transparent"
        stroke="#979797"
        strokeWidth="1.1px"
        transform={isOpen ? 'rotate(180)' : null}
      >
        <path d="M1,6 L10,15 L19,6" />
      </svg>
    )
  }
  
  function XIcon() {
    return (
      <svg
        viewBox="0 0 20 20"
        preserveAspectRatio="none"
        width={12}
        fill="transparent"
        stroke="#979797"
        strokeWidth="1.1px"
      >
        <path d="M1,1 L19,19" />
        <path d="M19,1 L1,19" />
      </svg>
    )
  }

  const Input = glamorous.input(
    {
      width: 'calc(100% - 16px)', // full width - icon width/2 - border
      fontSize: 14,
      wordWrap: 'break-word',
      lineHeight: '1em',
      outline: 0,
      whiteSpace: 'normal',
      minHeight: '2em',
      background: '#fff',
      display: 'inline-block',
      padding: '.5em 2em .5em 1em',
      color: 'rgba(0,0,0,.87)',
      boxShadow: 'none',
      border: '1px solid rgba(34,36,38,.15)',
      borderRadius: '.30rem',
      transition: 'box-shadow .1s ease,width .1s ease',
      ':hover': {
        borderColor: 'rgba(34,36,38,.35)',
        boxShadow: 'none',
      },
      [onAttention]: {
        borderColor: '#96c8da',
        boxShadow: '0 2px 3px 0 rgba(34,36,38,.15)',
      },
    },
    ({isOpen}) =>
      isOpen
        ? {
            borderBottomLeftRadius: '0',
            borderBottomRightRadius: '0',
          }
        : null,
  )
  
  export {ControllerButton, XIcon,ArrowIcon, Input}
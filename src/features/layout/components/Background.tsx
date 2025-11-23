export function Background() {
  const floatingElements = [
    { src: '/assets/images/bg/red.svg', className: 'f1 top-[11%] left-[11%]' },
    { src: '/assets/images/bg/orange.svg', className: 'f2 top-[30%] left-0' },
    { src: '/assets/images/bg/shape.svg', className: 'f3 top-[45%] left-[10%]' },
    { src: '/assets/images/bg/green.svg', className: 'f4 top-[70%] left-[-4%]' },
    { src: '/assets/images/bg/grad.svg', className: 'f5 top-[85%] left-[23%]' },
    { src: '/assets/images/bg/blue.svg', className: 'f6 top-[-7%] left-[75%]' },
    { src: '/assets/images/bg/arrow.svg', className: 'f7 top-[22%] left-[75%]' },
    { src: '/assets/images/bg/pink.svg', className: 'f8 top-[54%] left-[84%]' },
    { src: '/assets/images/bg/violet.svg', className: 'f9 top-[63%] left-[74%]' },
    { src: '/assets/images/bg/object.svg', className: 'f10 top-[78%] left-[57%]' },
  ];

  return (
    <div className="fixed mx-auto inset-0 pointer-events-none z-0" aria-hidden="true">
      {floatingElements.map((element, index) => (
        <img
          key={index}
          src={element.src}
          alt=""
          className={`absolute opacity-85 animate-float ${element.className}`}
        />
      ))}
    </div>
  );
}
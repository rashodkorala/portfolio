import { useTrail, animated } from "@react-spring/web";

export default function BasicTrail() {
  const [trails, api] = useTrail(
    2,
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      delay: 1000,
      loop: { reverse: true },
      
      // config: { duration: 1000 },
    }),
    []
  );

  return (
    <div>
      {trails.map((props) => (
        <animated.div style={props} className="text-white text-xl">
          Hello World
        </animated.div>
      ))}
    </div>
  );
}

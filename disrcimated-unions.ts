type BG = (
  | ({
    color: string;
  } & (
      | {
        gradient: {
          type: "overlay";
          opacity: number;
        };
      }
      | {
        gradient: {
          type: "linear";
          direction: "l2r" | "r2l" | "t2b" | "b2t";
          opacityStart: number;
          opacityStop: number;
        };
      }
      | {
        gradient: {
          type: "radial";
          opacityInner: number;
          opacityOuter: number;
        };
      }
    ))
  | {
    gradient: {
      type: null;
    };
  }
) & { image: string };

const bg_null: BG = {
  image: "url('https://example.com')",
  gradient: {
    type: null,
  },
};

const bg: BG = {
  color: "red",
  image: "url('https://example.com')",
  gradient: {
    type: "overlay",
    opacity: 0.5,
  },
};

const bg2: BG = {
  color: "red",
  image: "url('https://example.com')",
  gradient: {
    type: "linear",
    direction: "l2r",
    opacityStart: 0.5,
    opacityStop: 0.5,
  },
};

const bg3: BG = {
  color: "red",
  image: "url('https://example.com')",
  gradient: {
    type: "radial",
    opacityInner: 0.5,
    opacityOuter: 0.5,
  },
};

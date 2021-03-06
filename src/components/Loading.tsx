import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class extends Vue {
  @Prop() hidden!: boolean;
  opacity = 0;

  mounted() {
    this.opacity = 1;
  }

  render() {
    const line1 = `
      M100 100c49-26.7 76.7-26.7 86 0 7.6 40-50 75-86 90
      s-85 16-84-90c.7-70.7 23.3-82.3 68-35l35 35
    `;
    const line2 = `
      M100 100C88 20.7 73-.1 55 25c-27 44-18 178 45 143
      s83-134 41-148c-28-9.3-41.7 7-41 49.2V119
    `;
    return (
      <div class="loading" style={{ opacity: this.hidden ? 0 : this.opacity }}>
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle class="loading__center" cx="100" cy="100" r="7" />
          <rect class="loading__rect" x="65" y="65" width="70" height="70" rx="6" />
          <path class="loading__line loading__line--1" d={line1} />
          <path class="loading__line loading__line--2" d={line2} />
          <circle class="loading__dot loading__dot--1" cx="119" cy="100" r="7" />
          <circle class="loading__dot loading__dot--2" cx="100" cy="81" r="7" />
          <circle class="loading__dot loading__dot--3" cx="100" cy="119" r="7" />
          <mask id="loading__mask">
            <rect
              class="loading__rect loading__rect--masked"
              x="65" y="65" width="70" height="70" rx="6"
            />
          </mask>
          <path
            class="loading__line loading__line--masked loading__line--1"
            mask="url(#loading__mask)" d={line1}
          />
          <path
            class="loading__line loading__line--masked loading__line--2"
            mask="url(#loading__mask)" d={line2}
          />
        </svg>
        <div class="loading__title">
          Loading Git Stats
        </div>
      </div>
    );
  }
}

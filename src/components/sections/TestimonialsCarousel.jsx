import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { testimonials } from '../../data/testimonials.js'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import TestimonialCard from '../features/TestimonialCard.jsx'

export default function TestimonialsCarousel() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem já sorri com a Sorriso Odontologia"
          description="Experiências reais de quem confiou no nosso cuidado — de tratamentos preventivos a transformações estéticas completas."
        />

        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination, A11y]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            a11y={{ enabled: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12!"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name} className="h-auto pb-2">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  )
}

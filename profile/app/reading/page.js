// app/reading/page.js
export default function Reading() {
    return (
      <div className="container mx-auto px-4 py-8 max-w-xl">
  <h1 className="text-3xl font-bold mb-4">Reading</h1>
  <p className="text-lg">
    Welcome to the Reading page! Explore my various blogs and articles here.
  </p>
  <div className="mt-8 space-y-4">
    <div className="flex flex-col sm:flex-row items-start p-4 bg-gray-100 rounded shadow">
      {/* Image on the left */}
      <img
        src="/django_celery.webp" /* Replace with actual image URL */
        alt="Blog 1"
        className="w-16 h-16 object-cover rounded mb-2 sm:mb-0 sm:mr-4"
      />
      {/* Blog content */}
      <a target="_blank" href="https://medium.com/django-unleashed/setting-up-celery-workers-in-django-with-redis-a-step-by-step-guide-092cef344cf9">
      <div>
        <h2 className="text-xl font-semibold" >Setting Up Celery Workers in Django with Redis: A Step-by-Step Guide </h2>
        <p className="text-sm text-gray-600">Published on May 15, 2024</p>
        <p>Ever heard of Celery? Many are new to its power. It scales apps, boosts performance, and enhances user experience. This article focuses on…</p>
      </div>
      </a>
    </div>
    <div className="flex flex-col sm:flex-row items-start p-4 bg-gray-100 rounded shadow">
      {/* Image on the left */}
      <img
        src="/virtual.jpeg" /* Replace with actual image URL */
        alt="Blog 2"
        className="w-16 h-16 object-cover rounded mb-2 sm:mb-0 sm:mr-4"
      />
      {/* Blog content */}
      <a target="_blank" href="https://www.linkedin.com/pulse/python-virtual-environments-beginners-guide-creating-isolated-thorat-qsxcf/?trackingId=TmGjRWbjntJepFeCsr3B5w%3D%3D">
      <div>
        <h2 className="text-xl font-semibold">Python Virtual Environments: A Beginner's Guide to Creating Isolated Development Spaces.</h2>
        <p className="text-sm text-gray-600">Published on: 2024-28-04</p>
        <p>Virtual environments are isolated environments in which Python projects can run independently, with their own dependencies and configurations...</p>
      </div>
      </a>
    </div>
  </div>
</div>

    );
  }
  
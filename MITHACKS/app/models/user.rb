class User < ApplicationRecord
     def image_url()
        return "https://s3.amazonaws.com/#{Rails.application.config.bucket}/#{self.image_id}/image.png" 
  end
    
    
    
    
end

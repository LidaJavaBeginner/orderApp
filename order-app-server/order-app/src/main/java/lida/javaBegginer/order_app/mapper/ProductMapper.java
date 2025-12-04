package lida.javaBegginer.order_app.mapper;

import lida.javaBegginer.order_app.dto.ProductDTO;
import lida.javaBegginer.order_app.entity.ProductEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ProductMapper {

    ProductDTO toDTO(ProductEntity source);
    ProductEntity toEntity(ProductDTO source);
}

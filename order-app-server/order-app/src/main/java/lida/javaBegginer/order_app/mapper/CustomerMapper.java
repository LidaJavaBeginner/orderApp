package lida.javaBegginer.order_app.mapper;

import lida.javaBegginer.order_app.dto.CustomerDTO;
import lida.javaBegginer.order_app.entity.CustomerEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CustomerMapper {

    CustomerDTO toDTO(CustomerEntity source);
    CustomerEntity toEntity(CustomerDTO source);

}
